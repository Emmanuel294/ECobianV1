import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectCardComponent } from './personal-project-card.component';

describe('PersonalProjectCardComponent', (): void => {
  let component: PersonalProjectCardComponent | undefined = undefined;
  let fixture: ComponentFixture<PersonalProjectCardComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [PersonalProjectCardComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(PersonalProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
