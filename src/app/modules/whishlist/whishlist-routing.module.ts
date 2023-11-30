import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhishlistPageComponent } from './pages/whishlist-page/whishlist-page.component';

const routes: Routes = [{ path: '', component: WhishlistPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhishlistRoutingModule {}
