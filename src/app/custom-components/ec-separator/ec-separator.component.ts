import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ec-separator',
  templateUrl: './ec-separator.component.html',
  styleUrls: ['./ec-separator.component.css']
})
export class EcSeparatorComponent implements OnInit {

  @Input('separatorName') separatorName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
