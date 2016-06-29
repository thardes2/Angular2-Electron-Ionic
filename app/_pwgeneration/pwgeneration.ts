import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Pipe, PipeTransform} from '@angular/core';
import {NgFor} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  template: `
<h1>Here is the PwGeneration</h1>
 
    <a routerLink="[/dashboard']">dashboard</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class PwGeneration {

  constructor() {}

}