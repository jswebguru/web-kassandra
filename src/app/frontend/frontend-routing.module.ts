import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './home/home.component';
import { WriteMessageComponent } from './write-message/write-message.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {
    path: '', component: FrontendComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'write_message', component: WriteMessageComponent },
      { path: 'chat', component: ChatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FrontendRoutingModule { }




