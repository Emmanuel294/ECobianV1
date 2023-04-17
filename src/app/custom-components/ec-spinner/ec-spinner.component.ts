import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'ec-spinner',
  templateUrl: './ec-spinner.component.html',
  styleUrls: ['./ec-spinner.component.css']
})
export class EcSpinnerComponent implements OnInit {

  constructor(
    public readonly loaderService: LoaderService
  ) { }

  ngOnInit(): void {
  }

}
