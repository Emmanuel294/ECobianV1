import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcPresentationComponent } from './ec-presentation.component';

describe('EcPresentationComponent', (): void => {
  let component: EcPresentationComponent | undefined = undefined;
  let fixture: ComponentFixture<EcPresentationComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcPresentationComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
