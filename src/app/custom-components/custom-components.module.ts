import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcNavBarComponent } from './ec-nav-bar/ec-nav-bar.component';
import { EcPresentationComponent } from './ec-presentation/ec-presentation.component';



@NgModule({
  declarations: [
    EcNavBarComponent,
    EcPresentationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EcNavBarComponent,
    EcPresentationComponent
  ]
})
export class CustomComponentsModule { }
