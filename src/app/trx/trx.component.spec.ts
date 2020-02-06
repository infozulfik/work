import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxComponent } from './trx.component';

describe('TrxComponent', () => {
  let component: TrxComponent;
  let fixture: ComponentFixture<TrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
