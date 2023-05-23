import { Component, Input } from '@angular/core';
import { ButtonT } from 'src/app/types/components/button.type';
import { LinkT } from 'src/app/types/components/links.type';

@Component({
  selector: 'ec-nav-bar',
  styleUrls: ['./ec-nav-bar.component.css'],
  templateUrl: './ec-nav-bar.component.html',
})
export class EcNavBarComponent {
  public logoUrl: string = 'assets/logos/ECLogo.png';

  @Input("links") public links: Array<LinkT> = [];
  @Input("buttons") public buttons: Array<ButtonT> = [];
}
