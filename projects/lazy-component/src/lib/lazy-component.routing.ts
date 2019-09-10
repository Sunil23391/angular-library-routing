import { Routes } from '@angular/router';

import { LazyComponentComponent } from './lazy-component.component';
import { PaymentsComponent } from "payments";

export const routes: Routes = [
  {
    path: '',
    component: LazyComponentComponent,
  },{
    path: 'payments',
    component: PaymentsComponent,
  }
];
