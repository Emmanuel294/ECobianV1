import { Component, Input } from '@angular/core';

@Component({
  selector: 'ec-items-list',
  styleUrls: ['./ec-items-list.component.css'],
  templateUrl: './ec-items-list.component.html',
})
export class EcItemsListComponent {
  @Input('items') public items: Array<string> = [];
  @Input('listStyle') public listStyle: boolean = true;
  @Input('itemsClass') public itemsClass: string = '';
  @Input('listDirection') public listDirection: string = 'flex-col';
}
