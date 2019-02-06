export class Professor{
    private _id: string;
    private fname: string;
    private mname: string;
    private lname: string;
    private emp_num: string;
    private position: string;
    private title: string;
    private dept: string; 
    private college: string;
    private is_other_user: string; //contains otherID if yes; otherwise, null
    private other_user_type: string; //contains other user type if there is
    private is_pm_user: string; //contains panelmemberID if yes; otherwise, null

    constructor(professor?: any){
        if(professor){
            this._id = professor._id ? professor._id : "";
            this.fname = professor.fname ? professor.fname : "";
            this.mname = professor.mname ? professor.mname : "";
            this.lname = professor.lname ? professor.lname : "";
            this.emp_num = professor.emp_num ? professor.emp_num : "";
            this.position = professor.position ? professor.position : "";
            this.title = professor.title ? professor.title : "";
            this.dept = professor.dept ? professor.dept : "";
            this.college = professor.college ? professor.college : ""; 
            this.is_other_user = professor.is_other_user ? professor.is_other_user : "";
            this.other_user_type = professor.other_user_type ? professor.other_user_type : "";
            this.is_pm_user = professor.is_pm_user ? professor.is_pm_user : "";
        }
        else{
            this.fname = "";
            this.mname = "";
            this.lname = "";
            this.emp_num = "";
            this.position = "";
            this.title = "";
            this.dept = "";
            this.college = "";
            this.is_other_user = "";
            this.other_user_type = "";
            this.is_pm_user = "";
        }
    }

    setProfessor(
        prof_fname, 
        prof_mname, 
        prof_lname, 
        prof_emp_num, 
        prof_position, 
        prof_title, 
        prof_dept_id,
        college,
        is_other_user,
        other_user_type,
        is_pm_user
    ){
        this.fname = prof_fname;
        this.mname = prof_mname;
        this.lname = prof_lname;
        this.emp_num = prof_emp_num;
        this.position = prof_position;
        this.title = prof_title;
        this.dept = prof_dept_id;
        this.college = college;
        this.is_other_user = is_other_user;
        this.other_user_type = other_user_type;
        this.is_pm_user = is_pm_user;
    }

    getProfessorId(){
        return this._id;
    }
    getProfessorFname(){
        return this.fname;
    }
    getProfessorMname(){
        return this.mname;
    }
    getProfessorLname(){
        return this.lname; 
    }
    getProfessorFullName(){
        let firstName: string = this.fname;
        let middleName: string = this.mname && this.mname.length != 0 ? this.mname[0] + "." : "";
        let lastName: string = this.lname;
        let fullName: string = firstName + " " + middleName + " " + lastName;

        return fullName;
    }
    getProfessorEmpNum(){
        return this.emp_num;
    }
    getProfessorPosition(){
        return this.position;
    }
    getProfessorTitle(){
        return this.title;
    }
    getProfessorDepartment(){
        return this.dept;
    }
    getProfessorCollege(){
        return this.college;
    }
    getProfessorIsOtherUser(){
        return this.is_other_user;
    }
    getProfessorOtherUserType(){
        return this.other_user_type;
    }
    getProfessorIsPanelMemberUser(){
        return this.is_pm_user;
    }


    setProfessorId(_id){
        this._id = _id;
    }
    setProfessorFname(prof_fname){
        this.fname = prof_fname;
    }
    setProfessorMname(prof_mname){
        this.mname = prof_mname;
    }
    setProfessorLname(prof_lname){
        this.lname = prof_lname; 
    }
    setProfessorEmpNum(prof_emp_num){
        this.emp_num = prof_emp_num;
    }
    setProfessorPosition(prof_position){
        this.position = prof_position;
    }
    setProfessorTitle(prof_title){
        this.title = prof_title;
    }
    setProfessorDepartment(prof_dept_id){
        this.dept = prof_dept_id;
    }
    setProfessorCollege(college){
        this.college = college;
    }
    setProfessorIsOtherUser(is_other_user){
        this.is_other_user = is_other_user;
    }
    setProfessorOtherUserType(other_user_type){
        this.other_user_type = other_user_type;
    }
    setProfessorIsPanelMemberUser(is_pm_user){
        this.is_pm_user = is_pm_user;
    }
}