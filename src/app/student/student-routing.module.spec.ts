import { StudentRoutingModule } from './student-routing.module';

describe('StudentRoutingModule', () => {
  let studentRoutingModule: StudentRoutingModule;

  beforeEach(() => {
    studentRoutingModule = new StudentRoutingModule();
  });

  it('should create an instance', () => {
    expect(studentRoutingModule).toBeTruthy();
  });
});
