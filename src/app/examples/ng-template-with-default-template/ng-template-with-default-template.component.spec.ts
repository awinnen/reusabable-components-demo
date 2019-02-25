import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateWithDefaultTemplateComponent } from './ng-template-with-default-template.component';

describe('NgTemplateWithDefaultTemplateComponent', () => {
  let component: NgTemplateWithDefaultTemplateComponent;
  let fixture: ComponentFixture<NgTemplateWithDefaultTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateWithDefaultTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateWithDefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
