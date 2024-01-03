import { TestBed } from '@angular/core/testing';

import { ChiamateHttpService } from './chiamate-http.service';

describe('ChiamateHttpService', () => {
  let service: ChiamateHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiamateHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
