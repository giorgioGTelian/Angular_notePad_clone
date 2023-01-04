import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  textareaValue = '';

  constructor() {
    this.textareaValue = localStorage.getItem('textareaValue');
  }

  save() {
    console.log(this.textareaValue);
    localStorage.setItem('textareaValue', this.textareaValue);
  }

  clear() {
    localStorage.removeItem('textareaValue')
    this.textareaValue = "";
  }
}
