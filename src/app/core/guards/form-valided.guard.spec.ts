import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { formValidedGuard } from './form-valided.guard';

describe('formValidedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formValidedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
