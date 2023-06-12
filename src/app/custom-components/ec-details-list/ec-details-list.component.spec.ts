import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcDetailsListComponent } from './ec-details-list.component';

describe('EcDetailsListComponent', (): void => {
  let component: EcDetailsListComponent | undefined = undefined;
  let fixture: ComponentFixture<EcDetailsListComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcDetailsListComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
