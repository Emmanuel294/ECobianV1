import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
import { WorkDocument } from '../entities/work.types';
import { ListValueT } from '../types/components/listValue.type';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements AfterViewInit, OnChanges {

  @Input('works') works!: Array<WorkDocument>;

  public worksObservable$!: Observable<Array<ListValueT>>;

  constructor(
  ) { }

  public async ngAfterViewInit(): Promise<void> {
  }

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


}
