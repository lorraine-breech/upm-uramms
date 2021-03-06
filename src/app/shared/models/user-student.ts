import { Panel } from "./panel";

export class StudentUser{
    private _id: string;
    private fname: string;
    private mname: string;
    private lname: string;
    private stud_num: string;
    private year: string;
    private course: string;
    private dept: string;  
    private college: string; 
    private calendar_id: string;
    private study_id: string;
    private panel: Panel; 
    private adviser: string; //adviser name
    private presentation_p_id: string; //for proposal presentation
    private presentation_m_id: string; //for manus presentation
    private status: string; //proposal, implementation, manuscript, completed
    
    constructor(studentUser?: any){
        if(studentUser){
            this._id = studentUser._id;
            this.fname = studentUser.fname ? studentUser.fname : "";
            this.mname = studentUser.mname ? studentUser.mname : "";
            this.lname = studentUser.lname ? studentUser.lname: "";
            this.stud_num = studentUser.stud_num ? studentUser.stud_num: "";
            this.year = studentUser.year ? studentUser.year : "";
            this.course = studentUser.course ? studentUser.course : "";
            this.dept = studentUser.dept ? studentUser.dept : "";
            this.college = studentUser.college ? studentUser.college : "";
            this.calendar_id = studentUser.calendar_id ? studentUser.calendar_id : "";
            this.study_id = studentUser.study_id ? studentUser.study_id : ""; 
            this.panel = studentUser.panel ? studentUser.panel : new Panel(); 
            this.adviser = studentUser.adviser ? studentUser.adviser : "";
            this.presentation_p_id = studentUser.presentation_p_id ? studentUser.presentation_p_id : ""; 
            this.presentation_m_id = studentUser.presentation_m_id ? studentUser.presentation_m_id : ""; 
            this.status = studentUser.status ? studentUser.status : "";
        }
        else{
            this.fname = "";
            this.mname = "";
            this.lname = "";
            this.stud_num = "";
            this.year = "";
            this.course = "";
            this.dept = "";
            this.college = "";
            this.calendar_id = "";
            this.study_id = ""; 
            this.panel = new Panel(); 
            this.adviser;
            this.presentation_p_id = "";
            this.presentation_m_id = ""; 
            this.status = "";
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
        stud_panel,
        adviser,
        presentation_p_id,
        presentation_m_id,
        status
    ){
        this.fname = stud_fname;
        this.mname = stud_mname;
        this.lname = stud_lname;
        this.stud_num = stud_num;
        this.year = stud_year;
        this.course = stud_course;
        this.dept = stud_dept;
        this.college = stud_college;
        this.calendar_id = stud_calendar_id;
        this.study_id = stud_study_id; 
        this.panel = stud_panel; 
        this.adviser = adviser;
        this.presentation_p_id = presentation_p_id;
        this.presentation_m_id = presentation_m_id;
        this.status = status;
    }

    getStudentUserId(){
        return this._id;
    }

    getStudentUserFirstName(){
        return this.fname;
    }

    getStudentUserMiddleName(){
        return this.mname;
    }

    getStudentUserLastName(){
        return this.lname;
    }

    getStudentUserFullName(){
        let firstName: string = this.fname;
        let middleName: string = this.mname && this.mname.length != 0 ? this.mname[0] + "." : "";
        let lastName: string = this.lname;
        let fullName: string = firstName + " " + middleName + " " + lastName;

        return fullName;
    }
    
    getStudentUserFullNameLF(){
        let firstName: string = this.fname;
        let middleName: string = this.mname && this.mname.length != 0 ? this.mname[0] + "." : "";
        let lastName: string = this.lname;
        let fullName: string = lastName + ", " + firstName + " " + middleName;

        return fullName;
    }

    getStudentUserStudentNumber(){
        return this.stud_num;
    }
    
    getStudentUserYear(){
        return this.year;
    }

    getStudentUserCourse(){
        return this.course;
    }

    getStudentUserDepartment(){
        return this.dept;
    }

    getStudentUserCollege(){
        return this.college;
    }

    getStudentUserCalendarId(){
        return this.calendar_id;
    }
    getStudentUserStudyId(){
        return this.study_id;
    }
    getStudentUserPanel(){
        return this.panel;
    }
    getStudentUserAdviser(){
        return this.adviser;
    }
    getStudentUserPresentationProposalId(){
        return this.presentation_p_id;
    }
    getStudentUserPresentationManuscriptId(){
        return this.presentation_m_id;
    }
    getStudentUserStatus(){
        return this.status;
    }





    setStudentUserId(_id){
        this._id = _id;
    }

    setStudentUserFname(stud_fname){
        this.fname = stud_fname;
    }

    setStudentUserMname(stud_mname){
        this.mname = stud_mname;
    }

    setStudentUserLname(stud_lname){
        this.lname = stud_lname;
    }

    setStudentUserStudNum(stud_num){
        this.stud_num = stud_num;
    }

    setStudentUserYear(stud_year){
        this.year = stud_year;
    }

    setStudentUserCourse(stud_course){
        this.course = stud_course;
    }

    setStudentUserDepartment(stud_dept){
        this.dept = stud_dept;
    }

    setStudentUserCollege(stud_college){
        this.college = stud_college;
    }

    setStudentUserCalendarId(stud_calendar_id){
        this.calendar_id = stud_calendar_id;
    }

    setStudentUserStudyId(stud_study_id){
        this.study_id = stud_study_id;
    }

    setStudentUserPanel(stud_panel: Panel){
        this.panel = stud_panel;
    }
    setStudentUserAdviser(adviser){
        this.adviser = adviser;
    }
    setStudentUserPresentationProposalId(presentation_p_id){
        this.presentation_p_id = presentation_p_id;
    }
    setStudentUserPresentationManuscriptId(presentation_m_id){
        this.presentation_m_id = presentation_m_id;
    }
    setStudentUserStatus(status){
        this.status = status;
    }

}