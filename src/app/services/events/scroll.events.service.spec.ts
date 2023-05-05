import { TestBed } from '@angular/core/testing';

import { Scroll.EventsService } from './scroll.events.service';

describe('Scroll.EventsService', () => {
  let service: Scroll.EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scroll.EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
