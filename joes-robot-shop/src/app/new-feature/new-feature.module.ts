import { NgModule } from '@angular/core';
import { EatingFeatureComponent } from './eating-feature/eating-feature.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EatingFeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EatingFeatureComponent
  ]
})
export class NewFeatureModule { }
