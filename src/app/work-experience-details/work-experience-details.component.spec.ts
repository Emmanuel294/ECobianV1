import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceDetailsComponent } from './work-experience-details.component';

describe('WorkExperienceDetailsComponent', (): void => {
  let component: WorkExperienceDetailsComponent | undefined = undefined;
  let fixture: ComponentFixture<WorkExperienceDetailsComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(WorkExperienceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
