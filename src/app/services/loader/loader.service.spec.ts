import { LoaderService } from './loader.service';
import { TestBed } from '@angular/core/testing';


describe('LoaderService', (): void => {
  let service: LoaderService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
