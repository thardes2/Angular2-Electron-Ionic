import {Component, ViewChild} from '@angular/core';
import {App, ionicBootstrap, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './routes';
import {page1} from './pages/page1/mobile/page1'
import {page2} from './pages/page2/desktop/page2'
import {page3} from './pages/page3/desktop/page3'
import {page4} from './pages/page4/desktop/page4'
//import {keepassExternal} from '../typings/keepass.d.ts';

//import keepassExternal = require("keepassExternal");

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = page1
  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Getting Started', component: GettingStartedPage },
      // { title: 'List', component: ListPage },
      { title: 'page 1', component: page1 },
      { title: 'page 2', component: page2 },
      { title: 'page 3', component: page3 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
