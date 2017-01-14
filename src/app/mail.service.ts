import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    { id: 0, text: "John says hi." },
    { id: 1, text: "See what John said!" },
    { id: 2, text: "Stacy says wow" },
  ]

  update(id, text) {
    this.messages = this.messages.map((message) => {
      if (message.id === id) {
        return { id, text };
      }

      return message;
    });
  }

  constructor() { }

}
