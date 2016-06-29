import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'contacts-list',
  template: `
   Welcome to Page 2
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class page2 implements OnInit {
  
  constructor() {
    
  }
  
}