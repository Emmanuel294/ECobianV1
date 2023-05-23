import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcItemsListComponent } from './ec-items-list.component';

describe('EcItemsListComponent', (): void => {
  let component: EcItemsListComponent | undefined = undefined;
  let fixture: ComponentFixture<EcItemsListComponent> | undefined = undefined;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [EcItemsListComponent]
    })
      .compileComponents();
  });

  beforeEach((): void => {
    fixture = TestBed.createComponent(EcItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
