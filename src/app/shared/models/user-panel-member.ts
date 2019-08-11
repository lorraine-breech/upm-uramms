export class PanelMemberUser{
    private _id: string;
    private pm_prof_id: string;
    private pm_full_name: string;
    private pm_advisee_id: string[];
    private pm_coadvisee_id: string[];
    private pm_panelee_id: string[];
    private pm_calendar_id: string;

    constructor(panelMemberUser?: any){
        if(panelMemberUser){
            this._id = panelMemberUser._id ? panelMemberUser._id : "" ;
            this.pm_prof_id = panelMemberUser.pm_prof_id ? panelMemberUser.pm_prof_id : "";
            this.pm_full_name = panelMemberUser.pm_full_name ? panelMemberUser.pm_full_name : "";
            this.pm_advisee_id = panelMemberUser.pm_advisee_id ? panelMemberUser.pm_advisee_id : null;
            this.pm_coadvisee_id = panelMemberUser.pm_coadvisee_id ? panelMemberUser.pm_coadvisee_id : null;
            this.pm_panelee_id = panelMemberUser.pm_panelee_id ? panelMemberUser.pm_panelee_id : null;
            this.pm_calendar_id = panelMemberUser.pm_calendar_id ? panelMemberUser.pm_calendar_id : "";
        }
        else{ 
            this.pm_prof_id = "";
            this.pm_full_name = "";
            this.pm_advisee_id = null;
            this.pm_coadvisee_id = null;
            this.pm_panelee_id = null;
            this.pm_calendar_id = "";
        }
    }

    setPanelMemberUser(
        pm_prof_id,
        pm_full_name,
        pm_advisee_id,
        pm_coadvisee_id,
        pm_panelee_id,
        pm_calendar_id    
    ){
        this.pm_prof_id = pm_prof_id;
        this.pm_full_name = pm_full_name;
        this.pm_advisee_id = pm_advisee_id;
        this.pm_coadvisee_id = pm_coadvisee_id;
        this.pm_panelee_id = pm_panelee_id;
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
    getPanelMemberUserAdviseeId(){
        return this.pm_advisee_id;
    }
    getPanelMemberUserCoAdviseeId(){
        return this.pm_coadvisee_id;
    }
    getPanelMemberUserPaneleeId(){
        return this.pm_panelee_id;
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
    setPanelMemberUserAdviseeId(pm_advisee_id){
        this.pm_advisee_id = pm_advisee_id;
    }
    setPanelMemberUserCoAdviseeId(pm_coadvisee_id){
        this.pm_coadvisee_id = pm_coadvisee_id;
    }
    setPanelMemberUserPaneleeId(pm_panelee_id){
        this.pm_panelee_id = pm_panelee_id;
    }
    setPanelMemberUserCalendarId(pm_calendar_id){
        this.pm_calendar_id = pm_calendar_id;
    }
    
    
}