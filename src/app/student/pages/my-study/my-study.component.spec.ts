import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudyComponent } from './my-study.component';

describe('MyStudyComponent', () => {
  let component: MyStudyComponent;
  let fixture: ComponentFixture<MyStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
