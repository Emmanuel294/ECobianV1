import { TestBed } from '@angular/core/testing';
import { WorkService } from './work.service';


describe('WorkService', (): void => {
  let service: WorkService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
