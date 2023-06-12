import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', (): void => {
  let component: MainComponent | undefined = undefined;
  let fixture: ComponentFixture<MainComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
