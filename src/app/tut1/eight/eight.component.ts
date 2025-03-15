import { Component } from '@angular/core';
// for @Input decorator
import { Input } from '@angular/core';

@Component({
  selector: 'tut1-eight',
  imports: [],
  templateUrl: './eight.component.html',
  styleUrl: './eight.component.scss'
})
export class EightComponent {
  @Input() occupation = '';
  @Input() name="";
}
