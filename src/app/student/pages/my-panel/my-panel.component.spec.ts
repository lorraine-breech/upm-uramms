import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPanelComponent } from './my-panel.component';

describe('MyPanelComponent', () => {
  let component: MyPanelComponent;
  let fixture: ComponentFixture<MyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
