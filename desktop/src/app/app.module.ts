import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { TranslateModule} from "ng2-translate";
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {LoggedInGuard} from "../services/logged-in.guard";
import {UserService} from "../services/user";
@NgModule({
  imports: [
    MaterialModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  exports: [ TranslateModule],
  declarations: [ AppComponent ],
  providers:[LoggedInGuard,UserService],
  bootstrap: [ AppComponent ],
})//SharedModule.forRoot(),
export class AppModule { }