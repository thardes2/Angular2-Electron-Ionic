import { bootstrap }    from '@angular/platform-browser-dynamic';

import { provideRouter } from '@angular/router';

import { Dashboard } from './dashboard/dashboard';
import { AppComponent } from './appElectron.component';
import { KeyDepotAppRoutes } from './routes';

// bootstrap(AppComponent, [
//   provideRouter(ContactsAppRoutes)
// ]);
bootstrap(AppComponent, [
   provideRouter(KeyDepotAppRoutes)
]);


// bootstrap(Dashboard, [
//   provideRouter(KeyDepotAppRoutes),
//   provide(APP_BASE_HREF, {useValue : '' })
//   ]); 

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/