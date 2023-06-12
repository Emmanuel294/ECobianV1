import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcNavBarComponent } from './ec-nav-bar.component';

describe('EcNavBarComponent', (): void => {
  let component: EcNavBarComponent | undefined = undefined;
  let fixture: ComponentFixture<EcNavBarComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcNavBarComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
