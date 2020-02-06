import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmtTreeComponent } from './dmt-tree.component';

describe('DmtTreeComponent', () => {
  let component: DmtTreeComponent;
  let fixture: ComponentFixture<DmtTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmtTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmtTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
