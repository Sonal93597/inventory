import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'home'
}, {
    path: 'home',
    loadChildren: () => import('src/app/features/home/home.module').then(m => m.HomeModule)
   }, {
     path: 'inventory',
     loadChildren: () => import('src/app/features/manage-inventory/manage-inventory.module').then(m => m.ManageInventoryModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
