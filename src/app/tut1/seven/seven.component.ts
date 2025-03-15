import { Component } from '@angular/core';

@Component({
  selector: 'tut1-seven',
  imports: [],
  templateUrl: './seven.component.html',
  styleUrl: './seven.component.scss'
})
export class SevenComponent {
  greet() {
    alert("Hello, there 👋!")
  }

  message = "";

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  onMouseOut() {
    this.message = "";
  }
}
