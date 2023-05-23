import { animate, state, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, OnChanges, Type } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SlideInS, SlideOutS } from '../styleObjects/slide.style';
import { DynamicComponentI } from '../custom-components/dynamicComponent/dynamicComponent.type';
import { ListValueT } from '../types/components/listValue.type';
import { ScrollEventsService } from '../services/events/scroll.events.service';
import { WorkDocument } from '../entities/work.types';
import { WorkExperienceDetailsComponent } from '../work-experience-details/work-experience-details.component';

@Component({
  animations: [
    trigger('slide', [
      state('show', SlideInS),
      state('hide', SlideOutS),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ])
  ],
  selector: 'work-experience',
  styleUrls: ['./work-experience.component.css'],
  templateUrl: './work-experience.component.html',
})
export class WorkExperienceComponent implements OnChanges {
  @Input('works') public works!: Array<WorkDocument>;

  public dynamicComponent: Type<DynamicComponentI> = WorkExperienceDetailsComponent as unknown as Type<DynamicComponentI>;

  public state: string = 'hide';

  public worksObservable$!: Observable<Array<ListValueT>>;

  public constructor(
    public el: ElementRef,
    private readonly scrollService: ScrollEventsService
  ) { }

  public async ngOnChanges(): Promise<void> {
    console.log(1);
    this.worksObservable$ = of(
      this.works?.map(
        (work: WorkDocument): ListValueT<WorkDocument> => {
          return {
            content: work,
            label: work.place,
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
