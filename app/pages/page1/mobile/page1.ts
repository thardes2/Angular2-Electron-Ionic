import {Component} from '@angular/core';
import {pageMain} from '../../pageMain';
@Component({
  template:`
  
<ion-navbar *navbar>
  <button menuToggle>
    <ion-icon name="menu"></ion-icon>
  </button>
  <ion-title>Getting Started</ion-title>
</ion-navbar>


<ion-content padding class="getting-started">

  <h3>Welcome to the Ionic part</h3>
    We have own controllers for this part, but it is easy to share code by using inheritance of controllers for example.
    <button (click)="hiFromBase()">Click to use shared code</button>
</ion-content>

  `

})
 export class page1 extends pageMain  {

  constructor() {
      super();

  }


}
