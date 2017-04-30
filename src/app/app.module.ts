import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MdCheckboxModule, MdButtonModule, MdInputModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
