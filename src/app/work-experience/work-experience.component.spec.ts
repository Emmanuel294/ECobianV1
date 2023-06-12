import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceComponent } from './work-experience.component';

describe('WorkExperienceComponent', (): void => {
  let component: WorkExperienceComponent | undefined = undefined;
  let fixture: ComponentFixture<WorkExperienceComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
