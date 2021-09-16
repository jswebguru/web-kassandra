import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WriteMessageComponent } from './write-message/write-message.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [FrontendComponent, HomeComponent, WriteMessageComponent, ChatComponent, HeaderComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    FormsModule
  ]
})
export class FrontendModule { }
