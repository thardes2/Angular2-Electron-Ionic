// import {bootstrap} from '@angular/platform-browser-dynamic';
// import {Component, Pipe, PipeTransform} from '@angular/core';
// import {NgFor} from '@angular/common';
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'dashboard',
  template: `
      <h1>Here is the dashboard</h1>
      <h2>wup wup</h2> 
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class Dashboard implements OnInit {
  

  constructor() {
    
  }
  
  ngOnInit() {
    alert("wup");
  }
}