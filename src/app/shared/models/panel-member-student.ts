import { StudentUser } from "./user-student";

// for convenience
export class PMStudent{
    private student: StudentUser;
    private my_role: string; //string for convenience, adviser, co-adviser, panelist

    constructor(pmStudent?: any){
        if(pmStudent){
            this.student = pmStudent.student ? pmStudent.student : null;
            this.my_role = pmStudent.my_role ? pmStudent.my_role : "";
        }
        else{
            this.student = null;
            this.my_role = "";
        }
    }
    setPMStudent(student: StudentUser, my_role: string){
        this.student = student;
        this.my_role = my_role;
    }
    getPMStudentStudent(){
        return this.student;
    }
    getPMStudentMyRole(){
        return this.my_role;
    }
    setPMStudentStudent(student: StudentUser){
        this.student = student;
    }
    setPMStudentMyRole(my_role: string){
        this.my_role = my_role;
    }
} 