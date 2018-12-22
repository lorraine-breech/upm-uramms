import { Panel } from "./panel";

export class StudentUser{
    private _id: string;
    private stud_fname: string;
    private stud_mname: string;
    private stud_lname: string;
    private stud_num: string;
    private stud_year: string;
    private stud_course: string;
    private stud_dept: string; 
    private stud_college: string; 
    private stud_calendar_id: string;
    private stud_study_id: string;
    private stud_panel: Panel;
    private stud_presentation_id: string;
    
    constructor(studentUser?: any){
        if(studentUser){
            this._id = studentUser._id;
            this.stud_fname = studentUser.stud_fname ? studentUser.stud_fname : "";
            this.stud_mname = studentUser.stud_mname ? studentUser.stud_mname : "";
            this.stud_lname = studentUser.stud_lname ? studentUser.stud_lname: "";
            this.stud_num = studentUser.stud_num ? studentUser.stud_num: "";
            this.stud_year = studentUser.stud_year ? studentUser.stud_year : "";
            this.stud_course = studentUser.stud_course ? studentUser.stud_course : "";
            this.stud_dept = studentUser.stud_dept ? studentUser.stud_dept : "";
            this.stud_college = studentUser.stud_college ? studentUser.stud_college : "";
            this.stud_calendar_id = studentUser.stud_calendar_id ? studentUser.stud_calendar_id : "";
            this.stud_study_id = studentUser.stud_study_id ? studentUser.stud_study_id : ""; 
            this.stud_panel = studentUser.stud_panel ? studentUser.stud_panel : new Panel(); 
            this.stud_presentation_id = studentUser.stud_presentation_id ? studentUser.stud_presentation_id : ""; 
        }
        else{
            this.stud_fname = "";
            this.stud_mname = "";
            this.stud_lname = "";
            this.stud_num = "";
            this.stud_year = "";
            this.stud_course = "";
            this.stud_dept = "";
            this.stud_college = "";
            this.stud_calendar_id = "";
            this.stud_study_id = ""; 
            this.stud_panel = new Panel(); 
            this.stud_presentation_id = ""; 
        }

    }
    setStudentUser(
        stud_fname,
        stud_mname,
        stud_lname,
        stud_num,
        stud_year,
        stud_course,
        stud_dept,
        stud_college,
        stud_calendar_id,
        stud_study_id,
        stud_panel_id,
        stud_presentation_id
    ){
        this.stud_fname = stud_fname;
        this.stud_mname = stud_mname;
        this.stud_lname = stud_lname;
        this.stud_num = stud_num;
        this.stud_year = stud_year;
        this.stud_course = stud_course;
        this.stud_dept = stud_dept;
        this.stud_college = stud_college;
        this.stud_calendar_id = stud_calendar_id;
        this.stud_study_id = stud_study_id; 
        this.stud_panel = stud_panel_id; 
        this.stud_presentation_id = stud_presentation_id; 
    }

    getStudentUserId(){
        return this._id;
    }

    getStudentFirstName(){
        return this.stud_fname;
    }

    getStudentUserMiddleName(){
        return this.stud_mname;
    }

    getStudentUserLastName(){
        return this.stud_lname;
    }

    getStudentUserFullName(){
        let firstName: string = this.stud_fname;
        let middleName: string = this.stud_mname && this.stud_mname.length != 0 ? this.stud_mname[0] + "." : "";
        let lastName: string = this.stud_lname;
        let fullName: string = firstName + " " + middleName + " " + lastName;

        return fullName;
    }

    getStudentUserStudentNumber(){
        return this.stud_num;
    }
    
    getStudentUserYear(){
        return this.stud_year;
    }

    getStudentUsersCourseId(){
        return this.stud_course;
    }

    getStudentUserDepartmentId(){
        return this.stud_dept;
    }

    getStudentUserColId(){
        return this.stud_college;
    }

    getStudentUserCalendarId(){
        return this.stud_calendar_id;
    }
    getStudentUserStudyId(){
        return this.stud_study_id;
    }
    getStudentUserPanel(){
        return this.stud_panel;
    }

    getStudentUserPresentationId(){
        return this.stud_presentation_id;
    }





    setStudentUserId(_id){
        this._id = _id;
    }

    setStudentUserFname(stud_fname){
        this.stud_fname = stud_fname;
    }

    setStudentUserMame(stud_mname){
        this.stud_mname = stud_mname;
    }

    setStudentUserLname(stud_lname){
        this.stud_lname = stud_lname;
    }

    setStudentUserStudNum(stud_num){
        this.stud_num = stud_num;
    }

    setStudentUserYear(stud_year){
        this.stud_year = stud_year;
    }

    setStudentUserCourseId(stud_course){
        this.stud_course = stud_course;
    }

    setStudentUserDeptId(stud_dept){
        this.stud_dept = stud_dept;
    }

    setStudentUserColId(stud_college){
        this.stud_college = stud_college;
    }

    setStudentUserCalendarId(stud_calendar_id){
        this.stud_calendar_id = stud_calendar_id;
    }

    setStudentUserStudyId(stud_study_id){
        this.stud_study_id = stud_study_id;
    }

    setStudentUserPanel(stud_panel){
        this.stud_panel = stud_panel;
    }

    setStudentUserPresentationId(stud_presentation_id){
        this.stud_presentation_id = stud_presentation_id;
    }

}