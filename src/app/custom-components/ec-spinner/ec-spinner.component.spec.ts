import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSpinnerComponent } from './ec-spinner.component';

describe('EcSpinnerComponent', (): void => {
  let component: EcSpinnerComponent | undefined = undefined;
  let fixture: ComponentFixture<EcSpinnerComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcSpinnerComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
