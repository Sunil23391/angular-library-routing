import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentsModule } from "payments";

import { routes } from './lazy-component.routing';
import { LazyComponentComponent } from './lazy-component.component';

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [RouterModule.forChild(routes),PaymentsModule],
  exports: [LazyComponentComponent]
})
export class LazyComponentModule { }
