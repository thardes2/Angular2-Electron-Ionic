import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>Example app</h1>
    
    <div style="height: 100vh; margin: 0; padding: 0">
            <div style="height: 100vh; width: 150px; padding-left: 0; float: left; background-color: grey;">
            <ul>
              <li><a [routerLink]="['/']">First link</a></li>
              <li><a [routerLink]="['page2']">Second link</a></li>
              <li><a [routerLink]="['/page3']">Third link</a></li>
              <li><a [routerLink]="['/page4']">Fourth link</a></li>
           </ul>
             </div>
           <div id="content">
           Content will be here <br />
            <router-outlet></router-outlet>
            </div>

</div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }