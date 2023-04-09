import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WorkDocument } from '../entities/work.types';
import { ListValueT } from '../types/components/listValue.type';
import { WorkExperienceDetailsComponent } from '../work-experience-details/work-experience-details.component';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  @Input('works') works!: Array<WorkDocument>;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public getListValuesFromWorks(): Array<ListValueT> {
    return this.works?.map(
      (work: WorkDocument): ListValueT<WorkDocument> => {
        return {
          label: work.place,
          content: work,
        }
      }
    )
  }


}
