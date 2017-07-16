/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoaderIconService } from './loader-icon.service';

describe('Service: LoaderIcon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderIconService]
    });
  });

  it('should ...', inject([LoaderIconService], (service: LoaderIconService) => {
    expect(service).toBeTruthy();
  }));
});