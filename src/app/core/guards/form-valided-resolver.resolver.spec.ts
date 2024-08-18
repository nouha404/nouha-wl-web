import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { formValidedResolverResolver } from './form-valided-resolver.resolver';

describe('formValidedResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => formValidedResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
