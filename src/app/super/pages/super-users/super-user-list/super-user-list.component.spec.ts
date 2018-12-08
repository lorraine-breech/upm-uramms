import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUserListComponent } from './super-user-list.component';

describe('SuperUserListComponent', () => {
  let component: SuperUserListComponent;
  let fixture: ComponentFixture<SuperUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
