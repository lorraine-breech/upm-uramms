import { PMStudent } from "./panel-member-student";

export class PanelMemberUser{
    private _id: string;
    private pm_prof_id: string;
    private pm_full_name: string;
    
    private pm_student_list: PMStudent[];
    
  
    private pm_calendar_id: string;

    constructor(panelMemberUser?: any){
        if(panelMemberUser){
            this._id = panelMemberUser._id ? panelMemberUser._id : "" ;
            this.pm_prof_id = panelMemberUser.pm_prof_id ? panelMemberUser.pm_prof_id : "";
            this.pm_full_name = panelMemberUser.pm_full_name ? panelMemberUser.pm_full_name : "";
            
            this.pm_student_list = panelMemberUser.pm_student_list ? panelMemberUser.pm_student_list : null;
            this.pm_calendar_id = panelMemberUser.pm_calendar_id ? panelMemberUser.pm_calendar_id : "";
        }
        else{ 
            this.pm_prof_id = "";
            this.pm_full_name = "";
            this.pm_student_list = null;
            
            this.pm_calendar_id = "";
        }
    }

    setPanelMemberUser(
        pm_prof_id,
        pm_full_name,
        pm_student_list,
        pm_calendar_id    
    ){
        this.pm_prof_id = pm_prof_id;
        this.pm_full_name = pm_full_name;
        this.pm_student_list = pm_student_list
        
        this.pm_calendar_id = pm_calendar_id;
    }

    getPanelMemberUserId(){
        return this._id;
    }
    getPanelMemberUserProfId(){
        return this.pm_prof_id;
    }
    getPanelMemberUserFullName(){
        return this.pm_full_name;
    }
    getPanelMemberUserStudentList(){
        return this.pm_student_list;
    }

    getPanelMemberUserCalendarId(){
        return this.pm_calendar_id;
    }

    setPanelMemberUserId(_id){
        this._id = _id;
    }
    setPanelMemberUserProfId(pm_prof_id){
        this.pm_prof_id = pm_prof_id;
    }
    setPanelMemberUserFullName(pm_full_name){
        this.pm_full_name = pm_full_name;
    }
    setPanelMemberUserStudentList(pm_student_list){
        this.pm_student_list = pm_student_list;
    }
    setPanelMemberUserCalendarId(pm_calendar_id){
        this.pm_calendar_id = pm_calendar_id;
    }
    
    
}