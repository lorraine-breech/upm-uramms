export class SuperUser{
    private _id: string;
    private fname: string;
    private mname: string;
    private lname: string;
    private emp_num: string;
    private position: string;
    private title: string;
    private dept: string;
    private college: string;

    constructor(superUser? : any){
        if(superUser){
            this._id = superUser._id ? superUser._id : "";
            this.fname = superUser.fname ? superUser.fname : "";
            this.mname = superUser.mname ? superUser.mname : "";
            this.lname = superUser.lname ? superUser.lname : "";
            this.emp_num = superUser.emp_num ? superUser.emp_num : ""; 
            this.position = superUser.position ? superUser.position : "";
            this.title = superUser.title ? superUser.title : "";  
            this.dept = superUser.dept ? superUser.dept : ""; 
            this.college = superUser.college ? superUser.college : "";

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
        }
    }

    setSuperUser(
        super_fname, 
        super_mname, 
        super_lname, 
        super_emp_number, 
        super_position, 
        super_title,
        super_dept,
        super_college
    ){
        this.fname = super_fname;
        this.mname = super_mname;
        this.lname = super_lname;
        this.emp_num = super_emp_number;
        this.position = super_position;
        this.title = super_title; 
        this.dept = super_dept; 
        this.college = super_college;
    }

    getSuperUserId(){
        return this._id;
    }
    getSuperUserFname(){
        return this.fname;
    }
    getSuperUserMname(){
        return this.mname;
    }
    getSuperUserLname(){
        return this.lname;
    }
    getSuperUserFullName(){
        let firstName: string = this.fname;
        let middleName: string = this.mname && this.mname.length != 0 ? this.mname[0] + "." : "";
        let lastName: string = this.lname;
        let fullName: string = firstName + " " + middleName + " " + lastName;

        return fullName;
    }
    getSuperUserEmployeeNumber(){
        return this.emp_num;
    }
    getSuperUserPosition(){
        return this.position;
    }
    getSuperUserTitle(){
        return this.title;
    }
    getSuperUserDepartment(){
        return this.dept;
    }
    getSuperUserCollege(){
        return this.college;
    }


    setSuperUserId(_id){
        this._id = _id;
    }
    setSuperUserFname(super_fname){
        this.fname = super_fname;
    }
    setSuperUserMname(super_mname){
        this.mname = super_mname;
    }
    setSuperUserLname(super_lname){
        this.lname = super_lname;
    }
    setSuperUserEmployeeNumber(super_emp_number){
        this.emp_num = super_emp_number;
    }
    setSuperUserPosition(super_position){
        this.position = super_position;
    }
    setSuperUserTitle(super_title){
        this.title = super_title;
    }
    setSuperUserDepartment(super_dept_id){
        this.dept = super_dept_id;
    }
    setSuperUserCollege(super_college){
        this.college = super_college;
    }
}