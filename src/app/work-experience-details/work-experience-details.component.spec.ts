import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceDetailsComponent } from './work-experience-details.component';

describe('WorkExperienceDetailsComponent', () => {
  let component: WorkExperienceDetailsComponent;
  let fixture: ComponentFixture<WorkExperienceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
