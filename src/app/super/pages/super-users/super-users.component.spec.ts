import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUsersComponent } from './super-users.component';

describe('SuperUsersComponent', () => {
  let component: SuperUsersComponent;
  let fixture: ComponentFixture<SuperUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
