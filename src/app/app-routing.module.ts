import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { component: MainComponent, path: '' },
  { component: MainComponent, path: '*' },
  { component: MainComponent, path: '**' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
