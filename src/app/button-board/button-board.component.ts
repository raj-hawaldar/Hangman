import { WordDisplayService } from './../word-display/word-display.service';
import { Component, OnInit } from '@angular/core';

import { Button } from './../shared/button';
import { ButtonService } from './button.service';

/**
 *
 *
 * @export
 * @class ButtonBoardComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-button-board',
  templateUrl: './button-board.component.html',
  styleUrls: ['./button-board.component.css']
})
export class ButtonBoardComponent implements OnInit {
  /**
   *
   *
   * @type {Button}
   * @memberof ButtonBoardComponent
   */
  public buttons: Button[];
  /**
   *Creates an instance of ButtonBoardComponent.
   * @param {ButtonService} buttonService
   * @memberof ButtonBoardComponent
   */
  constructor(private buttonService: ButtonService, private wordDisplayService: WordDisplayService) { }

  /**
   *
   *
   * @memberof ButtonBoardComponent
   */
  ngOnInit() {
    this.buttons = this.buttonService.buttons;
  }


  /**
   *
   *
   * @memberof ButtonBoardComponent
   */
  public checkWord(button: Button): void {
    console.log(button.value);
    let index: any[];
    index = this.wordDisplayService.getAllIndexes(button.value);
    console.log('Value is ' + index);
  }
}
