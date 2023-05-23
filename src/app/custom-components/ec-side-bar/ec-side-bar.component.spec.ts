import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcSideBarComponent } from './ec-side-bar.component';

describe('EcSideBarComponent', (): void => {
  let component: EcSideBarComponent | undefined = undefined;
  let fixture: ComponentFixture<EcSideBarComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcSideBarComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
