import { TestBed } from '@angular/core/testing';

import { InsertAnDgetProductsService } from './insert-an-dget-products.service';

describe('InsertAnDgetProductsService', () => {
  let service: InsertAnDgetProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertAnDgetProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
