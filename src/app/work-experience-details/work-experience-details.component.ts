import { Component, Input, OnInit } from '@angular/core';
import { WorkDocument } from '../entities/work.types';

@Component({
  selector: 'work-experience-details',
  templateUrl: './work-experience-details.component.html',
  styleUrls: ['./work-experience-details.component.css']
})
export class WorkExperienceDetailsComponent implements OnInit {

  @Input('work') work!: WorkDocument;

  constructor() { }

  ngOnInit(): void {
  }

}
