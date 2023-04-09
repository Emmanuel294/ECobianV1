import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcDetailsListComponent } from './ec-details-list.component';

describe('EcDetailsListComponent', () => {
  let component: EcDetailsListComponent;
  let fixture: ComponentFixture<EcDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
