import { Component } from '@angular/core';

@Component({
  selector: 'tut1-five',
  imports: [],
  templateUrl: './five.component.html',
  styleUrl: './five.component.scss'
})
export class FiveComponent {
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' }];

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' }];
}
