import { FirebaseService } from './firebase.service';
import { TestBed } from '@angular/core/testing';


describe('FirebaseService', (): void => {
  let service: FirebaseService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
