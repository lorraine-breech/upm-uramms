import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRevisionComponent } from './submit-revision.component';

describe('SubmitRevisionComponent', () => {
  let component: SubmitRevisionComponent;
  let fixture: ComponentFixture<SubmitRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
