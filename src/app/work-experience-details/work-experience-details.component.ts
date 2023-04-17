import { Component, Input } from '@angular/core';
import { WorkDocument } from '../entities/work.types';

@Component({
  selector: 'work-experience-details',
  templateUrl: './work-experience-details.component.html',
  styleUrls: ['./work-experience-details.component.css'],
})
export class WorkExperienceDetailsComponent {

  @Input('work') work: WorkDocument | undefined;

  constructor() { }

}
