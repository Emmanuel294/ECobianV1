import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectCardComponent } from './personal-project-card.component';

describe('PersonalProjectCardComponent', () => {
  let component: PersonalProjectCardComponent;
  let fixture: ComponentFixture<PersonalProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
