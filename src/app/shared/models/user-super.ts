export class SuperUser{
    private _id: string;
    private super_fname: string;
    private super_mname: string;
    private super_lname: string;
    private super_emp_number: string;
    private super_position: string;
    private super_title: string;
    private super_dept: string;
    private super_college: string;

    constructor(superUser? : any){
        if(superUser){
            this._id = superUser._id ? superUser._id : "";
            this.super_fname = superUser.super_fname ? superUser.super_fname : "";
            this.super_mname = superUser.super_mname ? superUser.super_mname : "";
            this.super_lname = superUser.super_lname ? superUser.super_lname : "";
            this.super_emp_number = superUser.super_emp_number ? superUser.super_emp_number : ""; 
            this.super_position = superUser.super_position ? superUser.super_position : "";
            this.super_title = superUser.super_title ? superUser.super_title : "";  
            this.super_dept = superUser.super_dept ? superUser.super_dept : ""; 
            this.super_college = superUser.super_college ? superUser.super_college : "";

        }
        else{
            this.super_fname = "";
            this.super_mname = "";
            this.super_lname = "";
            this.super_emp_number = ""; 
            this.super_position = "";
            this.super_title = ""; 
            this.super_dept = "";
            this.super_college = ""; 
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
        this.super_fname = super_fname;
        this.super_mname = super_mname;
        this.super_lname = super_lname;
        this.super_emp_number = super_emp_number;
        this.super_position = super_position;
        this.super_title = super_title; 
        this.super_dept = super_dept; 
        this.super_college = super_college;
    }

    getSuperUserId(){
        return this._id;
    }
    getSuperUserFname(){
        return this.super_fname;
    }
    getSuperUserMname(){
        return this.super_mname;
    }
    getSuperUserLname(){
        return this.super_lname;
    }
    getSuperUserFullName(){
        let firstName: string = this.super_fname;
        let middleName: string = this.super_mname && this.super_mname.length != 0 ? this.super_mname[0] + "." : "";
        let lastName: string = this.super_lname;
        let fullName: string = firstName + " " + middleName + " " + lastName;

        return fullName;
    }
    getSuperUserEmployeeNumber(){
        return this.super_emp_number;
    }
    getSuperUserPosition(){
        return this.super_position;
    }
    getSuperUserTitle(){
        return this.super_title;
    }
    getSuperUserDepartment(){
        return this.super_dept;
    }
    getSuperUserCollege(){
        return this.super_college;
    }


    setSuperUserId(_id){
        this._id = _id;
    }
    setSuperUserFname(super_fname){
        this.super_fname = super_fname;
    }
    setSuperUserMname(super_mname){
        this.super_mname = super_mname;
    }
    setSuperUserLname(super_lname){
        this.super_lname = super_lname;
    }
    setSuperUserEmployeeNumber(super_emp_number){
        this.super_emp_number = super_emp_number;
    }
    setSuperUserPosition(super_position){
        this.super_position = super_position;
    }
    setSuperUserTitle(super_title){
        this.super_title = super_title;
    }
    setSuperUserDepartment(super_dept_id){
        this.super_dept = super_dept_id;
    }
    setSuperUserCollege(super_college){
        this.super_college = super_college;
    }
}