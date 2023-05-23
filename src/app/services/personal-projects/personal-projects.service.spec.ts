import { PersonalProjectsService } from './personal-projects.service';
import { TestBed } from '@angular/core/testing';


describe('PersonalProjectsService', (): void => {
  let service: PersonalProjectsService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalProjectsService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
