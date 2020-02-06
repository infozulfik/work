import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTabComponent } from './loan-tab.component';

describe('LoanTabComponent', () => {
  let component: LoanTabComponent;
  let fixture: ComponentFixture<LoanTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
