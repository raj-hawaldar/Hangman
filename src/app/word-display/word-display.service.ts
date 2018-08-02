import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordDisplayService {
  public wordToGuess: string;
  constructor() {
    this.wordToGuess = 'raj hawaldar';
  }
  public getAllIndexes(val) {
    const indexes = [];
    let i = -1;
    while (( i = this.wordToGuess.indexOf(val, i + 1)) !== -1) {
        indexes.push(i);
    }
    return indexes;
  }
}
