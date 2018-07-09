import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonBoardComponent } from './button-board/button-board.component';
import { SoreBoardComponent } from './sore-board/sore-board.component';
import { WordDisplayComponent } from './word-display/word-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonBoardComponent,
    SoreBoardComponent,
    WordDisplayComponent
  ],
  imports: [
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
