import { TestBed } from '@angular/core/testing';

import { PersonajesGuard } from './personajes.guard';

describe('PersonajesGuard', () => {
  let guard: PersonajesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonajesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
