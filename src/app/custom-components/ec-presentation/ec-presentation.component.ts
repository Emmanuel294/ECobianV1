import { Component, Input, OnInit } from '@angular/core';
import { ProfileDocument } from 'src/app/entities/profile.types';
import { PresentationT } from 'src/app/types/components/presentation.type';

@Component({
  selector: 'ec-presentation',
  templateUrl: './ec-presentation.component.html',
  styleUrls: ['./ec-presentation.component.css']
})
export class EcPresentationComponent implements OnInit {

  @Input('presentation') presentation!: PresentationT;

  constructor() { }

  ngOnInit(): void {
  }

}
