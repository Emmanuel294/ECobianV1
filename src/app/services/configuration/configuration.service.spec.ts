import { ConfigurationService } from './configuration.service';
import { TestBed } from '@angular/core/testing';


describe('ConfigurationService', (): void => {
  let service: ConfigurationService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
