import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOneUsComponent } from './project-one-us.component';

describe('ProjectOneUsComponent', () => {
  let component: ProjectOneUsComponent;
  let fixture: ComponentFixture<ProjectOneUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOneUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOneUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
