import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtTableComponent } from './dmt-table.component';

describe('DmtTableComponent', () => {
  let component: DmtTableComponent;
  let fixture: ComponentFixture<DmtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmtTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
