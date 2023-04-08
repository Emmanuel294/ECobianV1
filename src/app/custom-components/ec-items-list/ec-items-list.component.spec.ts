import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcItemsListComponent } from './ec-items-list.component';

describe('EcItemsListComponent', () => {
  let component: EcItemsListComponent;
  let fixture: ComponentFixture<EcItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
