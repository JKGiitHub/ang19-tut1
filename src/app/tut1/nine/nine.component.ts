import { Component } from '@angular/core';
// for iutput
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tut1-nine',
  imports: [],
  templateUrl: './nine.component.html',
  styleUrl: './nine.component.scss'
})
export class NineComponent {
  addItem() {
    this.addItemEvent.emit('🐢');
  }
  @Output() addItemEvent = new EventEmitter<string>();
}
