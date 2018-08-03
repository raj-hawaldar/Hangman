import { WordDisplayService } from './../word-display/word-display.service';
import { Component, OnInit } from '@angular/core';

import { Button } from './../shared/button';
import { ButtonService } from './button.service';
import { EventEmitter, Output } from '@angular/core';

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
   @Output() valueChange = new EventEmitter();
  public words: string;
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
    this.wordDisplayService.displayWords.subscribe( data => this.words = data );
  }

  /**
   *
   *
   * @memberof ButtonBoardComponent
   */
  public checkWord(button: Button): void {
    button.isEnabled = false;
    let index: any[];
    index = this.wordDisplayService.getAllIndexes(button.value);
    if (index.length === 0 ) {
      button.isWrong = true;
    } else {
      button.isCorrect = true;
      this.wordDisplayService.change(index, button.value);
    }
    this.wordDisplayService.displayWords.subscribe( data => this.words = data );
    this.valueChange.emit(this.words);
  }
}
