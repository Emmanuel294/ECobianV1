import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', (): void => {
  let component: AboutMeComponent | undefined = undefined;
  let fixture: ComponentFixture<AboutMeComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [AboutMeComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
