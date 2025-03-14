import { Component } from '@angular/core';
import { Phrase } from "./phrase";
// by me for ngIf
import {CommonModule} from '@angular/common';

const PHRASES: Phrase[] = [
    { value: "Hello World", language: "English" },
    { value: "Привет Мир", language: "Russian" },
    { value: "Привіт Світ", language: "Ukrainian" },
    { value: "Hola Mundo", language: "Spanish" },
    { value: "Bonjour le monde", language: "French" },
    { value: "Hallo Welt", language: "German" },
    { value: "Ciao mondo", language: "Italian" },
    { value: "Witaj świecie", language: "Polish" },
    { value: "Hej världen", language: "Swdish" },
    { value: "Pozdravljen, svet", language: "Slovenian" },
    { value: "Прывітанне Сусвет", language: "Belarusian" }
];

@Component({
  selector: 'app-comp-bind',
  imports: [CommonModule],
  templateUrl: './comp-bind.component.html',
  styleUrl: './comp-bind.component.scss'
})
export class CompBindComponent {
  PhraseList: Phrase[] = PHRASES;
  selectedPhraseLanguage: string = "";

  // Обработчик события, к которому привязаны элементы li из файла hello-world-list.component.html
  onSelect(selected: Phrase) {
      this.selectedPhraseLanguage = selected.language;
      console.log(selected);
  }
}
