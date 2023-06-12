import { ProfileService } from './profile.service';
import { TestBed } from '@angular/core/testing';


describe('ProfileService', (): void => {
  let service: ProfileService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
