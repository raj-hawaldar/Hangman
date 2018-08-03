import { Injectable } from '@angular/core';

import { Button } from '../shared/button';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  public buttons: Button[];
  constructor() {
    this.buttons = [];
    this.setButtons();
  }

  private setButtons() {
    for ( let i = 97 ; i < 123; i++) {
      const button = new Button();
      button.isCorrect = null;
      button.isEnabled = true;
      button.isWrong = null;
      button.value = String.fromCharCode(i);
      this.buttons.push(button);
    }
  }
}
