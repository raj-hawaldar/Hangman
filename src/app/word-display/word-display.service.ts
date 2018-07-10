import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordDisplayService {
  public wordToGuess: string;
  constructor() {
    this.wordToGuess = 'Taj Mahal';
  }
}
