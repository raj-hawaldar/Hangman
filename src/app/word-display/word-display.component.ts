import { Component, OnInit } from '@angular/core';
import { WordDisplayService } from './word-display.service';

@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent implements OnInit {
  public word: string;
  public wordOnBoard: string;
  constructor(private wordDisplayService: WordDisplayService) {
   }

  ngOnInit() {
    this.wordOnBoard = '';
    this.setBlank();
    this.word = this.wordDisplayService.wordToGuess;
    console.log(this.word.length);
  }

  public setBlank() {
    for (let i = 0 ; i < this.word.length ; i++) {
      this.wordOnBoard.concat('_');
    }
 /*    for (const letter of this.word) {
      console.log(letter);
      if (letter === ' ') {
        this.wordOnBoard.concat(' ');
      } else {
        this.wordOnBoard.concat('_');
      }
    }
    console.log(this.wordOnBoard);
  } */
  }
}
