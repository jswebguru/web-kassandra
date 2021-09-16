import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.css']
})

export class WriteMessageComponent implements OnInit {

  public startingMsgObj: any = {
    user_input: 'Who is the richest man in the world',
    last_input: '',
    last_response: '',
    re_chat_store: '',
    ck_chat_store: ''
  };

  constructor(private router: Router, private commonService: CommonService) { }


  ngOnInit(): void {

  }

  onWriteMessage(value: any): void {
    this.startingMsgObj.user_input = value.user_input;
    this.router.navigateByUrl('/chat');
  }
}
