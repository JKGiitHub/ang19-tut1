import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompBindComponent } from "./ang-templ/comp-bind/comp-bind.component";

import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompBindComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kphoto';
}
