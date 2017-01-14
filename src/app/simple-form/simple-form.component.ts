import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input
      #myInput
      type="text"
      [(ngModel)]="message"
      [ngClass]="{ mousedown: isMousedown }"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false"
    />
    <button (click)="update.emit({text:message})">Click Me!</button>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
    * {
      font-family: monospace;
    }
    input:focus {
      font-weight: bold;
      outline: none;
    }
    button {
      border: none;
    }
    .mousedown {
      border: 2px solid green;
    }
  `]
})

export class SimpleFormComponent {
  @Input() message;
  @Output() update = new EventEmitter();

  constructor() {

  }


  onClick(e, value) {
    console.log(e);
    console.log(`clicked with value ${value} and event of ${e}`);
  }
}
