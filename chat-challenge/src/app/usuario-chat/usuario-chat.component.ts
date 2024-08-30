import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-usuario-chat',
  templateUrl: './usuario-chat.component.html',
  styleUrls: ['./usuario-chat.component.css'],

})
export class UsuarioChatComponent {

  user1Message: string = '';
  user2Message: string = '';

  @Output() messageSent = new EventEmitter<{ user: string, text: string }>();

  sendMessage(user: string, text: string) {
    if (text.trim()) {
      this.messageSent.emit({ user, text });
      if (user === 'User 1') this.user1Message = '';
      if (user === 'User 2') this.user2Message = '';
    }
  }

}


