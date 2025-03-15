import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompBindComponent } from "./ang-templ/comp-bind/comp-bind.component";
import { TwoComponent } from "./tut1/two/two.component";
import { FourComponent } from "./tut1/four/four.component";
import { FiveComponent } from "./tut1/five/five.component";

@Component({
	selector: 'app-root',
	imports: [
    RouterOutlet,
    CompBindComponent,
    TwoComponent,
    FourComponent,
    FiveComponent
],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'kphoto';
}
