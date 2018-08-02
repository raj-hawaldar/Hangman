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
  public displayWordList: string[];
  constructor(private wordDisplayService: WordDisplayService) {
   }

  ngOnInit() {
    this.displayWordList = [];
    this.words = this.wordDisplayService.wordToGuess.split(' ');
    console.log('Words are');
    console.log(this.words);
    for (const word of this.words) {
      this.displayWordList.push(word.toLowerCase().replace(/[a-z]/g, '-'));
    }
    console.log(this.displayWordList);
  }

  public setBlank() {
  }
}
