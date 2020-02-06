import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOneBodyComponent } from './project-one-body.component';

describe('ProjectOneBodyComponent', () => {
  let component: ProjectOneBodyComponent;
  let fixture: ComponentFixture<ProjectOneBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOneBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOneBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
