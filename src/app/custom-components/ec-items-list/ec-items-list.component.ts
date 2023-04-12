import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ec-items-list',
  templateUrl: './ec-items-list.component.html',
  styleUrls: ['./ec-items-list.component.css']
})
export class EcItemsListComponent implements OnInit {

  @Input('items') items: Array<string> = [];
  @Input('listStyle') listStyle: boolean = true;
  @Input('itemsClass') itemsClass: string = '';
  @Input('listDirection') listDirection: string = 'flex-col';

  constructor() { }

  ngOnInit(): void {
  }

}
