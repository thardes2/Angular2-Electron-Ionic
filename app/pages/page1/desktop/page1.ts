import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {pageMain} from '../../pageMain';

@Component({
  selector: 'contacts-list',
  template: `
    <h3>Welcome to the Electron part</h3>
    We have own controllers for this part, but it is easy to share code by using inheritance of controllers for example.
    <button (click)="hiFromBase()">Click to use shared code</button>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class page1 extends pageMain implements OnInit {
  
  constructor() {
    super();
  }
  
}