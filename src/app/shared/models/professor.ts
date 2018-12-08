export class Professor{
    private _id: string;
    private prof_fname: string;
    private prof_mname: string;
    private prof_lname: string;
    private prof_emp_num: string;
    private prof_position: string;
    private prof_title: string;
    private prof_dept_id: string; //I don't have to store the colID in the model

    constructor(professor?: any){
        if(professor){
            this._id = professor._id ? professor._id : "";
            this.prof_fname = professor.prof_fname ? professor.prof_fname : "";
            this.prof_mname = professor.prof_mname ? professor.prof_mname : "";
            this.prof_lname = professor.prof_lname ? professor.prof_lname : "";
            this.prof_emp_num = professor.prof_emp_num ? professor.prof_emp_num : "";
            this.prof_position = professor.prof_position ? professor.prof_position : "";
            this.prof_title = professor.prof_title ? professor.prof_title : "";
            this.prof_dept_id = professor.prof_dept_id ? professor.prof_dept_id : "";
        }
        else{
            this.prof_fname = "";
            this.prof_mname = "";
            this.prof_lname = "";
            this.prof_emp_num = "";
            this.prof_position = "";
            this.prof_title = "";
            this.prof_dept_id = "";
        }
    }

    setProf(prof_fname, prof_mname, prof_lname, prof_emp_num, prof_position, prof_title, prof_dept_id){
        this.prof_fname = prof_fname;
        this.prof_mname = prof_mname;
        this.prof_lname = prof_lname;
        this.prof_emp_num = prof_emp_num;
        this.prof_position = prof_position;
        this.prof_title = prof_title;
        this.prof_dept_id = prof_dept_id;
    }

    getProfId(){
        return this._id;
    }
    getProfFname(){
        return this.prof_fname;
    }
    getProfMname(){
        return this.prof_mname;
    }
    getProfLname(){
        return this.prof_lname; 
    }
    getProfFullName(){
        let firstName: string = this.prof_fname;
        let middleName: string = this.prof_mname && this.prof_mname.length != 0 ? this.prof_mname[0] + "." : "";
        let lastName: string = this.prof_lname;
        let fullName: string = firstName + " " + middleName + " " + lastName;

        return fullName;
    }
    getProfEmpNum(){
        return this.prof_emp_num;
    }
    getProfPosition(){
        return this.prof_position;
    }
    getProfTitle(){
        return this.prof_title;
    }
    getProfDeptId(){
        return this.prof_dept_id;
    }

    setProfId(_id){
        this._id = _id;
    }
    setProfFname(prof_fname){
        this.prof_fname = prof_fname;
    }
    setProfMname(prof_mname){
        this.prof_mname = prof_mname;
    }
    setProfLname(prof_lname){
        this.prof_lname = prof_lname; 
    }

    setProfEmpNum(prof_emp_num){
        this.prof_emp_num = prof_emp_num;
    }
    setProfPosition(prof_position){
        this.prof_position = prof_position;
    }
    setProfTitle(prof_title){
        this.prof_title = prof_title;
    }
    setProfDeptId(prof_dept_id){
        this.prof_dept_id = prof_dept_id;
    }
}