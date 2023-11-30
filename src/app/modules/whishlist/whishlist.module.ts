import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhishlistRoutingModule } from './whishlist-routing.module';
import { WhishlistPageComponent } from './pages/whishlist-page/whishlist-page.component';


@NgModule({
  declarations: [
    WhishlistPageComponent
  ],
  imports: [
    CommonModule,
    WhishlistRoutingModule
  ]
})
export class WhishlistModule { }
