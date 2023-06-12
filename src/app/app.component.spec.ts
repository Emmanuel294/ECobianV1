import { TestBed, TestBedStatic } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', (): void => {
  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
    }).compileComponents();
  });

  it('should create the app', (): void => {
    const fixture: any = TestBed.createComponent(AppComponent);
    const app: any = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ECobianV1'`, (): void => {
    const fixture: any = TestBed.createComponent(AppComponent);
    const app: any = fixture.componentInstance;
    expect(app.title).toEqual('ECobianV1');
  });

  it('should render title', (): void => {
    const fixture: any = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: any = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ECobianV1 app is running!');
  });
});
