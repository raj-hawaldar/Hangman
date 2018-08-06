import { Component, OnInit } from '@angular/core';
import { WordDisplayService } from './word-display.service';
import { AddSpaces } from './../shared/add-spaces.pipe';
@Component({
  selector: 'app-word-display',
  templateUrl: './word-display.component.html',
  styleUrls: ['./word-display.component.css']
})
export class WordDisplayComponent implements OnInit {
  public words: string[];
  public displayWord: string;
  public attempts = new Array(8);
  private attemptIndex: number;
  constructor(private wordDisplayService: WordDisplayService) {
  }

  ngOnInit() {
    this.wordDisplayService.displayWords.subscribe(data => this.displayWord = data);
    this.words = this.displayWord.split(' ');
    this.attemptIndex = -1;
    for (let i = 0; i < this.attempts.length; i++) {
      this.attempts[i] = true;
    }
  }
  public test() {
    alert(this.words);
  }
  public changeString(value: string) {
    this.displayWord = value;
    this.words = this.displayWord.split(' ');
  }
   public setAttempts(value: string) {
    this.attemptIndex ++;
    if (this.attemptIndex < this.attempts.length) {
      this.attempts[this.attemptIndex] = false;
    } else {
      alert('You Loss the Game');
    }
  }
}
