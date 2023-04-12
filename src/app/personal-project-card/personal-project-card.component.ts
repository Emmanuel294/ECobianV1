import { Component, OnInit, Input } from '@angular/core';
import { DescriptionList } from '../types/interfaces/descriptionList.interface';
import { PersonalProjectDocument } from '../entities/personalProject.types';

@Component({
  selector: 'personal-project-card',
  templateUrl: './personal-project-card.component.html',
  styleUrls: ['./personal-project-card.component.css']
})
export class PersonalProjectCardComponent implements OnInit, DescriptionList {

  @Input('content') content: any = {
    content: '',
    itemsList: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
