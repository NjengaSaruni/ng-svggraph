import { TestBed } from '@angular/core/testing';

import { NgGraphsService } from './ng-graphs.service';

describe('NgGraphsService', () => {
  let service: NgGraphsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgGraphsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
