import { Component, Input } from '@angular/core';
import { DescriptionList } from '../types/interfaces/descriptionList.interface';

@Component({
  selector: 'personal-project-card',
  styleUrls: ['./personal-project-card.component.css'],
  templateUrl: './personal-project-card.component.html',
})
export class PersonalProjectCardComponent implements DescriptionList {
  @Input('content') public content: any = {
    content: '',
    itemsList: []
  };
}
