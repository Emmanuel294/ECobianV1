import { ScrollEventsService } from './scroll.events.service';
import { TestBed } from '@angular/core/testing';


describe('ScrollEventsService', (): void => {
  let service: ScrollEventsService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollEventsService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
