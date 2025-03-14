import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompBindComponent } from "./ang-templ/comp-bind/comp-bind.component";
import { TwoComponent } from "./tut1/two/two.component";

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		CompBindComponent,
		TwoComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'kphoto';
}
