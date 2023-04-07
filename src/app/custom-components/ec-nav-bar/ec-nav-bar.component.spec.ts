import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcNavBarComponent } from './ec-nav-bar.component';

describe('EcNavBarComponent', () => {
  let component: EcNavBarComponent;
  let fixture: ComponentFixture<EcNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
