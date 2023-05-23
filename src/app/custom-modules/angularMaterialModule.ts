import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

@NgModule({
    bootstrap: [],
    declarations: [
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatMenuModule
    ],
    imports: [
        MatListModule
    ],
    providers: [],
})
export class AngularMaterialModule { }
