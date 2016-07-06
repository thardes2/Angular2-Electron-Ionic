
import {Dashboardcomponent} from './pages/dashboard/desktop/dashboard.component';

import {page1} from './pages/page1/desktop/page1'
import {page2} from './pages/page2/desktop/page2'
import {page3} from './pages/page3/desktop/page3'
import {page4} from './pages/page4/desktop/page4'


export const AppRoutes = [
  { path: '', component: page1 },
  { path: 'page2', component: page2 },
  { path: 'page3', component: page3 },
  { path: 'page4', component: page4 }
]