import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';

const routes: Routes = [{
  path: 'list', component: ManageInventoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageInventoryRoutingModule { }
