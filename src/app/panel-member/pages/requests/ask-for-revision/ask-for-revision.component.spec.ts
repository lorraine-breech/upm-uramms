import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskForRevisionComponent } from './ask-for-revision.component';

describe('AskForRevisionComponent', () => {
  let component: AskForRevisionComponent;
  let fixture: ComponentFixture<AskForRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskForRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskForRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
