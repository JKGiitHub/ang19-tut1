import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompBindComponent } from "./ang-templ/comp-bind/comp-bind.component";
import { TwoComponent } from "./tut1/two/two.component";
import { FourComponent } from "./tut1/four/four.component";
import { FiveComponent } from "./tut1/five/five.component";
import { SixComponent } from "./tut1/six/six.component";
import { SevenComponent } from "./tut1/seven/seven.component";
import { EightComponent } from "./tut1/eight/eight.component";

@Component({
	selector: 'app-root',
	imports: [
    RouterOutlet,
    CompBindComponent,
    TwoComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent
],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'kphoto';
}
