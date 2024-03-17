import { TestBed } from '@angular/core/testing';

import { MegaMenuService } from './mega-menu.service';

describe('MegaMenuService', () => {
  let service: MegaMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegaMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
