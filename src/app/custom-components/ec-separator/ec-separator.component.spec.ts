import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcSeparatorComponent } from './ec-separator.component';

describe('EcSeparatorComponent', (): void => {
  let component: EcSeparatorComponent | undefined = undefined;
  let fixture: ComponentFixture<EcSeparatorComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcSeparatorComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
