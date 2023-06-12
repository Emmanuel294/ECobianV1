import { Component, Input, OnInit } from '@angular/core';
import { PresentationT } from 'src/app/types/components/presentation.type';

@Component({
  selector: 'ec-presentation',
  styleUrls: ['./ec-presentation.component.css'],
  templateUrl: './ec-presentation.component.html',
})
export class EcPresentationComponent {
  @Input('presentation') public presentation!: PresentationT;
}
