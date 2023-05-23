import { TechnologyService } from './technology.service';
import { TestBed } from '@angular/core/testing';


describe('TechnologyService', (): void => {
  let service: TechnologyService | undefined = undefined;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologyService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
