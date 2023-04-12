import { TestBed } from '@angular/core/testing';

import { PersonalProjectsService } from './personal-projects.service';

describe('PersonalProjectsService', () => {
  let service: PersonalProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
