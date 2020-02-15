// for convenience PM Mod
export class ReqStudent{
    private student_id: string;
    private student_number: string;
    private student_course: string;
    private student_full_name_lf: string;

    constructor(reqStudent?: any){
        if(reqStudent){
            this.student_id = reqStudent.student_id ? reqStudent.student_id : "";
            this.student_number = reqStudent.student_number ? reqStudent.student_number : "";
            this.student_course = reqStudent.student_course ? reqStudent.student_course : "";
            this.student_full_name_lf = reqStudent.student_full_name_lf ? reqStudent.student_full_name_lf : "";

        }
        else{
            this.student_id = "";
            this.student_number = "";
            this.student_course = "";
            this.student_full_name_lf = "";
        }
    }
    setReqStudent(
        student_id: string,
        student_number: string,
        student_course: string,
        student_full_name_lf: string
        ){
        this.student_id = student_id;
        this.student_number = student_number;
        this.student_course = student_course;
        this.student_full_name_lf = student_full_name_lf;

    }
    getReqStudentId(){
        return this.student_id;
    }
    getReqStudentNumber(){
        return this.student_number;
    }
    getReqStudentCourse(){
        return this.student_course;
    }
    getReqStudentFullNameLF(){
        return this.student_full_name_lf;
    }
    
    setReqStudentId(student_id){
        this.student_id = student_id;
    }
    setReqStudentNumber(student_number){
        this.student_number = student_number;
    }
    setReqStudentCourse(student_course){
        this.student_course = student_course;
    }
    setReqStudentFullNameLF(student_full_name_lf){
        this.student_full_name_lf = student_full_name_lf;
    }
    
} 