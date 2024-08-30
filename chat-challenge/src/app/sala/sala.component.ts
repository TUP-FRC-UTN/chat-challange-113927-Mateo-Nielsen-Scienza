import { Component, OnInit } from '@angular/core';


interface Mensaje {
  usuario: string;
  mensaje: string;
}

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit{

  messages: { user: string, text: string }[] = []; // Array que va a almacernar mensajes

  ngOnInit(): void {
   //inizializar
  }

  // Método para manejar los mensajes enviados desde el componente
  handleMessage(event: { user: string, text: string }) {
    this.messages.push(event); 
  }
}


