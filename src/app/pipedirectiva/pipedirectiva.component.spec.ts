import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedirectivaComponent } from './pipedirectiva.component';

describe('PipedirectivaComponent', () => {
  let component: PipedirectivaComponent;
  let fixture: ComponentFixture<PipedirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipedirectivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipedirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
