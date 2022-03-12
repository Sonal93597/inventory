import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomMaterialModule } from './custom-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { GoBackDirective } from './go-back.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [GoBackDirective],
  imports: [
    CommonModule,
    CustomMaterialModule,    FlexLayoutModule,
    FormsModule, HttpClientModule,
    SharedRoutingModule
  ],
  exports: [  CommonModule,   FlexLayoutModule,
    FormsModule, GoBackDirective, HttpClientModule,
    CustomMaterialModule]
})
export class SharedModule { }
