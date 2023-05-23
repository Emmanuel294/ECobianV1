import { Component, Input } from '@angular/core';
import { DynamicComponentI } from '../custom-components/dynamicComponent/dynamicComponent.type';
import { WorkDocument } from '../entities/work.types';

@Component({
  selector: 'work-experience-details',
  styleUrls: ['./work-experience-details.component.css'],
  templateUrl: './work-experience-details.component.html',
})
export class WorkExperienceDetailsComponent implements DynamicComponentI {
  @Input('inputData') public inputData: WorkDocument | undefined;
}
