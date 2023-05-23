import { AngularMaterialModule } from '../custom-modules/angularMaterialModule';
import { CommonModule } from '@angular/common';
import { EcCardComponent } from './ec-card/ec-card.component';
import { EcDetailsListComponent } from './ec-details-list/ec-details-list.component';
import { EcItemsListComponent } from './ec-items-list/ec-items-list.component';
import { EcNavBarComponent } from './ec-nav-bar/ec-nav-bar.component';
import { EcPresentationComponent } from './ec-presentation/ec-presentation.component';
import { EcSeparatorComponent } from './ec-separator/ec-separator.component';
import { EcSideBarComponent } from './ec-side-bar/ec-side-bar.component';
import { EcSpinnerComponent } from './ec-spinner/ec-spinner.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    EcNavBarComponent,
    EcPresentationComponent,
    EcSeparatorComponent,
    EcItemsListComponent,
    EcDetailsListComponent,
    EcCardComponent,
    EcSpinnerComponent,
    EcSideBarComponent
  ],
  exports: [
    EcNavBarComponent,
    EcPresentationComponent,
    EcSeparatorComponent,
    EcItemsListComponent,
    EcCardComponent,
    EcSpinnerComponent,
    EcDetailsListComponent,
    EcSideBarComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
  ],
})
export class CustomComponentsModule { }
