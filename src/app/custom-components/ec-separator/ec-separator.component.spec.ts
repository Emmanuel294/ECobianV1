import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcSeparatorComponent } from './ec-separator.component';

describe('EcSeparatorComponent', () => {
  let component: EcSeparatorComponent;
  let fixture: ComponentFixture<EcSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
