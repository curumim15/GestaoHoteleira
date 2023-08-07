import { TestBed } from '@angular/core/testing';

import { QuartoService } from './quarto.service';

describe('QuartoService', () => {
  let service: QuartoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuartoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
