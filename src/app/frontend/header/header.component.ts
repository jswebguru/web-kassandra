import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('.mobile-menu').click(() => {
        $('body').toggleClass('isMenu');
      });

      $('.mobile-menu-close').click(() => {
        $('body').removeClass('isMenu');
      });
    });
  }

  goBack(): void {
    window.history.back();
  }
}
