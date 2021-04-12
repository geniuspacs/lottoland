import { TestBed } from '@angular/core/testing';

import { WinningNumbersService } from './winning-numbers.service';

describe('WinningNumbersService', () => {
  let service: WinningNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinningNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
