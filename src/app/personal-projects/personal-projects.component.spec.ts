import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalProjectsComponent } from './personal-projects.component';

describe('PersonalProjectsComponent', (): void => {
  let component: PersonalProjectsComponent | undefined = undefined;
  let fixture: ComponentFixture<PersonalProjectsComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [PersonalProjectsComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(PersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
