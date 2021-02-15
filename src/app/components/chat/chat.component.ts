import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})

export class ChatComponent implements OnInit {
  mensaje = '';
  mensajes: any;
  constructor(public _chatService: ChatService) { }

  ngOnInit() {
    this._chatService.cargarMensajes().subscribe(
      res => {
        this.mensajes = res;
      }
    );
  }

  enviar_mensaje() {
    if (this.mensaje.length === 0) {
      return;
    }
    this._chatService.agregarMensaje(this.mensaje)
      .then(() => (this.mensaje = ''))
      .catch((err) => {
        console.error('Error al enviar', err);
      });
  }
}
