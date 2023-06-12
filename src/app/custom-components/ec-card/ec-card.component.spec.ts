import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcCardComponent } from './ec-card.component';

describe('EcCardComponent', (): void => {
  let component: EcCardComponent<any> | undefined = undefined;
  let fixture: ComponentFixture<EcCardComponent<any>> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcCardComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
