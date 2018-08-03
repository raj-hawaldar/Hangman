import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordDisplayService {
  public wordToGuess: string;
  private displayWordList = new BehaviorSubject<string>('');
  public displayWords = this.displayWordList.asObservable();
  constructor() {
    this.wordToGuess = 'Raj Hawaldar';
    this.displayWordList.next(this.wordToGuess.toLowerCase().replace(/[a-z]/g, '-'));
  }
  public getAllIndexes(val) {
    const indexes = [];
    let i = -1;
    while ((i = this.wordToGuess.toLowerCase().indexOf(val, i + 1)) !== -1) {
      indexes.push(i);
    }
    return indexes;
  }
  public change(index: number[], value: string) {
    let word = this.displayWordList.getValue();
    for (const i of index ) {
      word = this.replaceAt(word, i, value);
    }
    this.displayWordList.next(word);
  }
  public replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
}
