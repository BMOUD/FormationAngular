import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfieReadOnlyComponent } from './selfie-read-only.component';

describe('SelfieReadOnlyComponent', () => {
  let component: SelfieReadOnlyComponent;
  let fixture: ComponentFixture<SelfieReadOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfieReadOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfieReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
