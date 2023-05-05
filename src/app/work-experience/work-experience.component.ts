import { Component, Input, OnChanges, HostListener, ElementRef } from '@angular/core';
import { trigger, state, animate, transition } from '@angular/animations';
import { WorkDocument } from '../entities/work.types';
import { ListValueT } from '../types/components/listValue.type';
import { Observable, of } from 'rxjs';
import { SlideInS, SlideOutS } from '../styleObjects/slide.style';
import { ScrollEventsService } from '../services/events/scroll.events.service';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
  animations: [
    trigger('slide', [
      state('show', SlideInS),
      state('hide', SlideOutS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ]
})
export class WorkExperienceComponent implements OnChanges {

  @Input('works') works!: Array<WorkDocument>;

  public state = 'hide';

  public worksObservable$!: Observable<Array<ListValueT>>;

  constructor(
    public el: ElementRef,
    private readonly scrollService: ScrollEventsService
  ) { }

  public async ngOnChanges(): Promise<void> {
    this.worksObservable$ = of(
      this.works?.map(
        (work: WorkDocument): ListValueT<WorkDocument> => {
          return {
            label: work.place,
            content: work,
          }
        }
      )
    );
  }

  @HostListener('window:scroll', ['$event'])
  public checkScroll(): void {
    this.state = this.scrollService.checkScroll(this.el);
  }
}
