import { Component, OnChanges, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';
import { PersonalProjectDocument } from '../entities/personalProject.types';
import { CardT } from '../types/components/card.type';
import { PersonalProjectCardComponent } from '../personal-project-card/personal-project-card.component';
import { DescriptionList } from '../types/interfaces/descriptionList.interface';
import { ScrollEventsService } from '../services/events/scroll.events.service';
import { trigger, state, animate, transition } from '@angular/animations';
import { SlideInS, SlideOutS } from '../styleObjects/slide.style';

@Component({
  selector: 'personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css'],
  animations: [
    trigger('slide', [
      state('show', SlideInS),
      state('hide', SlideOutS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class PersonalProjectsComponent implements AfterViewInit, OnChanges {

  @Input('personalProjects') personalProjects: Array<PersonalProjectDocument> | undefined = undefined;

  public state = 'hide';

  public cardItems: Array<CardT<PersonalProjectDocument>> = [];

  constructor(
    public el: ElementRef,
    private readonly scrollService: ScrollEventsService
  ) { }

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

  @HostListener('window:scroll', ['$event'])
  public checkScroll(): void {
    this.state = this.scrollService.checkScroll(this.el);
  }

}
