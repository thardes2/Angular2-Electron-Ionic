import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizedComponent } from './authorized.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";
const routes: Routes = [
  {
    path: '',
    component: AuthorizedComponent,
    children: [
      {
        path: '',
        redirectTo: 'DashboardComponent',
      },
      {
        path: 'page1',
        component: Page1Component,
      },
      {
        path: 'page2',
        component: Page2Component,
      },
      {
        path: 'loop',
        loadChildren: './authorized/authorized.module#AuthorizedModule',
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild( routes ),
    CommonModule,
    FormsModule
  ],
  providers: [ ],
  declarations: [ AuthorizedComponent, Page1Component, Page2Component ],
  exports: [
    RouterModule
  ],
  bootstrap: [ AuthorizedComponent ],
})

export class AuthorizedModule {}