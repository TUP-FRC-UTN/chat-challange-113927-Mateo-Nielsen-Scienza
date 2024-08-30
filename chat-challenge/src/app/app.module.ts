import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SalaComponent } from './sala/sala.component';
import { UsuarioChatComponent } from './usuario-chat/usuario-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaComponent,
    UsuarioChatComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
