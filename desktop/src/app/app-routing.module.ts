import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoggedInGuard} from "../services/logged-in.guard";

const routes: Routes = [
  {
    path: 'authorized',
    redirectTo: 'authorized',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'authorized',
    loadChildren: './authorized/authorized.module#AuthorizedModule',
    canActivate: [ LoggedInGuard ],
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot( routes, { useHash: true } ),
  ],
  providers: [ LoggedInGuard ],
  declarations: [ LoginComponent ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {}
