/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FrameworkConfigService } from './framework-config.service';

describe('Service: FrameworkConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrameworkConfigService]
    });
  });

  it('should ...', inject([FrameworkConfigService], (service: FrameworkConfigService) => {
    expect(service).toBeTruthy();
  }));
});