
import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges } from '@angular/core';
import { animate, state, transition, trigger } from '@angular/animations';
import { SlideInS, SlideOutS } from '../styleObjects/slide.style';
import { CardT } from '../types/components/card.type';
import { DescriptionList } from '../types/interfaces/descriptionList.interface';
import { PersonalProjectCardComponent } from '../personal-project-card/personal-project-card.component';
import { PersonalProjectDocument } from '../entities/personalProject.types';
import { ScrollEventsService } from '../services/events/scroll.events.service';

@Component({
  animations: [
    trigger('slide', [
      state('show', SlideInS),
      state('hide', SlideOutS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ],
  selector: 'personal-projects',
  styleUrls: ['./personal-projects.component.css'],
  templateUrl: './personal-projects.component.html',
})
export class PersonalProjectsComponent implements AfterViewInit, OnChanges {
  @Input('personalProjects') public personalProjects: Array<PersonalProjectDocument> | undefined = undefined;

  public state: string = 'hide';

  public cardItems: Array<CardT<PersonalProjectDocument>> = [];

  public constructor(
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
            component: PersonalProjectCardComponent as unknown as DescriptionList,
            content: {
              content: personalProject,
              itemsList: personalProject.technologies
            },
            header: personalProject.name,
            headerIcon: personalProject.icon ? personalProject.icon : 'folder',
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
