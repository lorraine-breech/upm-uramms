export class ReqResponse{
    //stores panelmemberuserID 
    private pm_other_user_id: string; //store pm or other user id
    private prof_name: string; 
    private prof_role: string; //adviser, co-adviser, panelist, dept-chair, dean, col-sec 
    private response: number; //0-unresponded, 1-approved, 2-disapproved
    private remarks: string; //contains text for remarks or reasons
    private date: Date; //date the prof responded

    constructor(response?: any){
        if(response){
            this.pm_other_user_id = response.pm_other_user_id ? response.pm_other_user_id : "";
            this.prof_name = response.prof_name ? response.prof_name : "";
            this.prof_role = response.prof_role ? response.prof_role : "";
            this.response = response.response ? response.response : "";
            this.remarks = response.remarks ? response.remarks : "";
            this.date = response.date ? response.date : new Date();
        }
        else{
            this.pm_other_user_id = null;
            this.prof_name = null; 
            this.prof_role = null;
            this.response = 0;
            this.remarks = null;
            this.date = null;
        }
    }

    public setResponseObject(pm_other_user_id, prof_name, prof_role, response, remarks, date){
        this.pm_other_user_id = pm_other_user_id;
        this.prof_name = prof_name;
        this.prof_role = prof_role;
        this.response = response;
        this.remarks = remarks;
        this.date = date;
    }

    getPMOtherUserId(){
        return this.pm_other_user_id;
    }
    getProfName(){
        return this.prof_name;
    }
    getProfRole(){
        return this.prof_role;
    }
    getResponse(){
        return this.response;
    }
    getRemarks(){
        return this.remarks;
    }
    getDate(){
        return this.date;
    }

    setPMOtherUserId(pm_other_user_id){
        this.pm_other_user_id = pm_other_user_id;
    }
    setProfName(prof_name){
        this.prof_name = prof_name;
    }
    setProfRole(prof_role){
        this.prof_role = prof_role;
    }
    setResponse(response){
        this.response = response;
    }
    setRemarks(remarks){
        this.remarks = remarks;
    }
    setDate(date){
        this.date = date;
    }
    
}