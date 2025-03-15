import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoComponent } from "./tut1/two/two.component";
import { FourComponent } from "./tut1/four/four.component";
import { FiveComponent } from "./tut1/five/five.component";
import { SixComponent } from "./tut1/six/six.component";
import { SevenComponent } from "./tut1/seven/seven.component";
import { EightComponent } from "./tut1/eight/eight.component";
import { NineComponent } from "./tut1/nine/nine.component";

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        TwoComponent,
        FourComponent,
        FiveComponent,
        SixComponent,
        SevenComponent,
        EightComponent,
        NineComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'kphoto';
    items = new Array();

    addItem(item: string) {
        this.items.push(item);
    }
}
