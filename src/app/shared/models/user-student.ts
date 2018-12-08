import { Panel } from "./panel";

export class StudentUser{
    private _id: string;
    private stud_fname: string;
    private stud_mname: string;
    private stud_lname: string;
    private stud_num: string;
    private stud_year: string;
    private stud_course_id: string;
    private stud_dept_id: string; //keep this for quick search
    private stud_col_id: string; //keep this for quick search
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
            this.stud_course_id = studentUser.stud_course_id ? studentUser.stud_course_id : "";
            this.stud_dept_id = studentUser.stud_dept_id ? studentUser.stud_dept_id : "";
            this.stud_col_id = studentUser.stud_col_id ? studentUser.stud_col_id : "";
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
            this.stud_course_id = "";
            this.stud_dept_id = "";
            this.stud_col_id = "";
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
        stud_course_id,
        stud_dept_id,
        stud_col_id,
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
        this.stud_course_id = stud_course_id;
        this.stud_dept_id = stud_dept_id;
        this.stud_col_id = stud_col_id;
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
        return this.stud_course_id;
    }

    getStudentUserDepartmentId(){
        return this.stud_dept_id;
    }

    getStudentUserColId(){
        return this.stud_col_id;
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

    setStudentUserCourseId(stud_course_id){
        this.stud_course_id = stud_course_id;
    }

    setStudentUserDeptId(stud_dept_id){
        this.stud_dept_id = stud_dept_id;
    }

    setStudentUserColId(stud_col_id){
        this.stud_col_id = stud_col_id;
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