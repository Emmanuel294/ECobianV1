import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProyectsComponent } from './personal-projects.component';

describe('PersonalProyectsComponent', () => {
  let component: PersonalProyectsComponent;
  let fixture: ComponentFixture<PersonalProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalProyectsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
