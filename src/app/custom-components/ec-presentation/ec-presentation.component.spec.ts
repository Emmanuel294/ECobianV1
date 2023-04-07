import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcPresentationComponent } from './ec-presentation.component';

describe('EcPresentationComponent', () => {
  let component: EcPresentationComponent;
  let fixture: ComponentFixture<EcPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
