import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcNavBarComponent } from './ec-nav-bar/ec-nav-bar.component';
import { EcPresentationComponent } from './ec-presentation/ec-presentation.component';
import { EcSeparatorComponent } from './ec-separator/ec-separator.component';
import { EcItemsListComponent } from './ec-items-list/ec-items-list.component';
import { EcDetailsListComponent } from './ec-details-list/ec-details-list.component';



@NgModule({
  declarations: [
    EcNavBarComponent,
    EcPresentationComponent,
    EcSeparatorComponent,
    EcItemsListComponent,
    EcDetailsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EcNavBarComponent,
    EcPresentationComponent,
    EcSeparatorComponent,
    EcItemsListComponent
  ]
})
export class CustomComponentsModule { }
