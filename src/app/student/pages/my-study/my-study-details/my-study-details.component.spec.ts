import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStudyDetailsComponent } from './my-study-details.component';

describe('MyStudyDetailsComponent', () => {
  let component: MyStudyDetailsComponent;
  let fixture: ComponentFixture<MyStudyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStudyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStudyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
