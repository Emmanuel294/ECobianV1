import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  public title: string = 'TestsComponent';

  constructor() { }

  ngOnInit(): void {
    console.log('hi');
  }

}
