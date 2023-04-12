import { Component, OnChanges, Input, AfterViewInit } from '@angular/core';
import { PersonalProjectDocument } from '../entities/personalProject.types';
import { CardT } from '../types/components/card.type';
import { PersonalProjectCardComponent } from '../personal-project-card/personal-project-card.component';
import { DescriptionList } from '../types/interfaces/descriptionList.interface';

@Component({
  selector: 'personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements AfterViewInit, OnChanges {

  @Input('personalProjects') personalProjects: Array<PersonalProjectDocument> | undefined = undefined;

  public cardItems: Array<CardT<PersonalProjectDocument>> = [];

  constructor() { }

  public ngAfterViewInit(): void {
    this.generateCardItems();
  }

  public generateCardItems(): void {
    if (this.personalProjects) {
      this.cardItems = this.personalProjects.map(
        (personalProject: PersonalProjectDocument): CardT<PersonalProjectDocument> => {
          const newCardItem: CardT<PersonalProjectDocument> = {
            header: personalProject.name,
            headerIcon: personalProject.icon ? personalProject.icon : 'folder',
            content: {
              content: personalProject,
              itemsList: personalProject.technologies
            },
            component: PersonalProjectCardComponent as unknown as DescriptionList
          }

          return newCardItem;
        }
      )
    }
  }

  public ngOnChanges(): void {
    this.generateCardItems();
  }

}
