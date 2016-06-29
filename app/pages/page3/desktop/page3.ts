import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'contacts-list',
  template: `
   Welcome to Page 3
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class page3 implements OnInit {
  
  constructor() {
    
  }
  
}