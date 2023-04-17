import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSpinnerComponent } from './ec-spinner.component';

describe('EcSpinnerComponent', () => {
  let component: EcSpinnerComponent;
  let fixture: ComponentFixture<EcSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
