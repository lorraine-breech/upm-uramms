import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPanelListComponent } from './my-panel-list.component';

describe('MyPanelListComponent', () => {
  let component: MyPanelListComponent;
  let fixture: ComponentFixture<MyPanelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPanelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPanelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
