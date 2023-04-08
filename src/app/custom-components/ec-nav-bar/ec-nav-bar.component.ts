import { Component, Input } from '@angular/core';
import { ButtonT } from 'src/app/types/components/button.type';
import { LinkT } from 'src/app/types/components/links.type';

@Component({
  selector: 'ec-nav-bar',
  templateUrl: './ec-nav-bar.component.html',
  styleUrls: ['./ec-nav-bar.component.css']
})
export class EcNavBarComponent {

  @Input("links") links: Array<LinkT> = [];
  @Input("buttons") buttons: Array<ButtonT> = [];

  constructor() { }

}
