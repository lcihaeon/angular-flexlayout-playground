import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdCheckboxModule, MdButtonModule, MdInputModule, MdAutocompleteModule, MdSliderModule,
  MdButtonToggleModule, MdRadioModule, MdIconModule, MdSlideToggleModule, MdCardModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdAutocompleteModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdButtonToggleModule,
    MdRadioModule,
    MdIconModule,
    MdCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
