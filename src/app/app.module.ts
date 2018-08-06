import { AddSpaces } from './shared/add-spaces.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonBoardComponent } from './button-board/button-board.component';
import { WordDisplayComponent } from './word-display/word-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonBoardComponent,
    WordDisplayComponent,
    AddSpaces
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
