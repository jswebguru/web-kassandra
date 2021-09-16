import { Component, OnInit } from '@angular/core';
import { myChat } from '../chatresponse.model';
import { CommonService } from '../service/common.service';

import $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  response: any;
  myMsgObj: any = {
    user_input: '',
    last_input: '',
    last_response: '',
    re_chat_store: '',
    ck_chat_store: ''
  };
  myChatArray: myChat[] = [];
  myChat = new myChat();
  inputCharacterLength = '0';
  isWriteMsg = true;
  thought: any;
  aiThoughts: any;
  isThinking = false;

  constructor(private commonService: CommonService) {
    const data = JSON.parse(sessionStorage.getItem('myChat'));
    if (data != null) {
      this.myChatArray = JSON.parse(sessionStorage.getItem('myChat'));
    }
  }

  ngOnInit(): void {
    this.getAiResponse();

    setTimeout(() => {
      const div = $('.chating-msg');
      div.animate({
        scrollTop: div[0].scrollHeight
      }, 1000);
    }, 1000);
  }

  inputLength(inputLength): void {
    this.inputCharacterLength = inputLength;
  }

  onChat(value: any, chat): void {
    if (value.user_input !== '') {
      this.myMsgObj.user_input = value.user_input;
      this.myChat = new myChat();
      this.myChat.myMessage = this.myMsgObj.user_input;
      this.myChatArray.push(this.myChat);
      this.getAiResponse();
      chat.reset();
      this.scrollToBottom();
      this.isWriteMsg = false;
      this.aiThoughts = false;
      this.isThinking = true;
      this.inputCharacterLength = '0';
    }
  }

  scrollToBottom(): void {
    const div = $('.chating-msg');
    div.animate({
      scrollTop: div[0].scrollHeight
    }, 1000);
  }

  getAiResponse(): void {
    if (this.myChatArray.length > 1) {
      const index = this.myChatArray.length;
      this.myMsgObj.last_input = this.myChatArray[index - 2].myMessage;
      this.myMsgObj.last_response = this.myChatArray[index - 2].cassandraResponse;
      this.myMsgObj.re_chat_store = JSON.parse(sessionStorage.getItem('re_chat'));
      this.myMsgObj.ck_chat_store = JSON.parse(sessionStorage.getItem('ck_chat'));
      sessionStorage.removeItem('re_chat');
      sessionStorage.removeItem('ck_chat');
    }

    this.commonService.getResponse(this.myMsgObj).subscribe(
      (data) => {
        console.log(data);
        this.myChat.cassandraResponse = data.final_response;
        this.aiThoughts = data.ai_thoughts;
        this.thought = this.aiThoughts[this.aiThoughts.selected];
        const index = this.myChatArray.length;
        this.myChatArray[index - 1].cassandraResponse = this.myChat.cassandraResponse;
        sessionStorage.setItem('myChat', JSON.stringify(this.myChatArray));
        sessionStorage.setItem('ck_chat', JSON.stringify(data.ck_chat));
        sessionStorage.setItem('re_chat', JSON.stringify(data.re_chat));
        this.isThinking = false;
      },
      (err) => {
        console.log('error', err);
      },
      () => {
        this.isWriteMsg = true;
        this.scrollToBottom();
      }
    );
  }

  toggleAiThoughts(): void {
    $('.aithoughts-toggle').toggleClass('isaithoughts');
    $('.aithoughts').toggleClass('isaithoughts');
  }



}

