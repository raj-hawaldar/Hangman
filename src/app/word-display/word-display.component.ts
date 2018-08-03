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
  constructor(private wordDisplayService: WordDisplayService) {
  }

  ngOnInit() {
    this.wordDisplayService.displayWords.subscribe(data => this.displayWord = data);
    this.words = this.displayWord.split(' ');
  }
  public test() {
    alert(this.words);
  }
  public changeString(value: string) {
    this.displayWord = value;
    this.words = this.displayWord.split(' ');
  }
}
