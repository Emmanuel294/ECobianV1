import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatIconModule
    ],
    imports: [
        MatListModule
    ],
    providers: [],
    bootstrap: []
})
export class AngularMaterialModule { }
