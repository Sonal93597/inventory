import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ManageInventoryRoutingModule } from './manage-inventory-routing.module';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomMaterialModule } from 'src/app/shared/custom-material.module';
import { AddEditInventoryComponent } from './add-edit-inventory/add-edit-inventory.component';

@NgModule({
  declarations: [ManageInventoryComponent, AddEditInventoryComponent],
  imports: [
    SharedModule, CustomMaterialModule,
    ManageInventoryRoutingModule
  ],
  entryComponents: [AddEditInventoryComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class ManageInventoryModule { }
