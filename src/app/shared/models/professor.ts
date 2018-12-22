export class Professor{
    private _id: string;
    private fname: string;
    private mname: string;
    private lname: string;
    private emp_num: string;
    private position: string;
    private title: string;
    private dept_id: string; //I don't have to store the colID in the model

    constructor(professor?: any){
        if(professor){
            this._id = professor._id ? professor._id : "";
            this.fname = professor.fname ? professor.fname : "";
            this.mname = professor.mname ? professor.mname : "";
            this.lname = professor.lname ? professor.lname : "";
            this.emp_num = professor.emp_num ? professor.emp_num : "";
            this.position = professor.position ? professor.position : "";
            this.title = professor.title ? professor.title : "";
            this.dept_id = professor.dept_id ? professor.dept_id : "";
        }
        else{
            this.fname = "";
            this.mname = "";
            this.lname = "";
            this.emp_num = "";
            this.position = "";
            this.title = "";
            this.dept_id = "";
        }
    }

    setProf(prof_fname, prof_mname, prof_lname, prof_emp_num, prof_position, prof_title, prof_dept_id){
        this.fname = prof_fname;
        this.mname = prof_mname;
        this.lname = prof_lname;
        this.emp_num = prof_emp_num;
        this.position = prof_position;
        this.title = prof_title;
        this.dept_id = prof_dept_id;
    }

    getProfId(){
        return this._id;
    }
    getProfFname(){
        return this.fname;
    }
    getProfMname(){
        return this.mname;
    }
    getProfLname(){
        return this.lname; 
    }
    getProfFullName(){
        let firstName: string = this.fname;
        let middleName: string = this.mname && this.mname.length != 0 ? this.mname[0] + "." : "";
        let lastName: string = this.lname;
        let fullName: string = firstName + " " + middleName + " " + lastName;

        return fullName;
    }
    getProfEmpNum(){
        return this.emp_num;
    }
    getProfPosition(){
        return this.position;
    }
    getProfTitle(){
        return this.title;
    }
    getProfDeptId(){
        return this.dept_id;
    }

    setProfId(_id){
        this._id = _id;
    }
    setProfFname(prof_fname){
        this.fname = prof_fname;
    }
    setProfMname(prof_mname){
        this.mname = prof_mname;
    }
    setProfLname(prof_lname){
        this.lname = prof_lname; 
    }

    setProfEmpNum(prof_emp_num){
        this.emp_num = prof_emp_num;
    }
    setProfPosition(prof_position){
        this.position = prof_position;
    }
    setProfTitle(prof_title){
        this.title = prof_title;
    }
    setProfDeptId(prof_dept_id){
        this.dept_id = prof_dept_id;
    }
}