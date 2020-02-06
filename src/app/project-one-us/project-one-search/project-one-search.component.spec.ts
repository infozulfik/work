import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOneSearchComponent } from './project-one-search.component';

describe('ProjectOneSearchComponent', () => {
  let component: ProjectOneSearchComponent;
  let fixture: ComponentFixture<ProjectOneSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOneSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
