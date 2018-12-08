export class ACPanelMemberRequest{
    private _id: string;
    private acrequest_type: string;
    private acrequest_stud_id: string;
    private acrequest_role_type: string;
    private acrequest_prof_id: string[]; //string[0]-from, string[1]-to
    private acrequest_response: string[]; //string[0]-from response, string[1]-to response
    private acrequest_remarks: string[]; //string[0]-fro remarks, string[1]-to remarks
    private acrequest_date_created: Date;
    private acrequest_status: string;

    constructor(acrequest? : any){
        if(acrequest){
            this._id = acrequest._id ? acrequest._id : "";
            this.acrequest_type = acrequest.acrequest_type ? acrequest.acrequest_type : "";
            this.acrequest_stud_id = acrequest.acrequest_stud_id ? acrequest.acrequest_stud_id : "";
            this.acrequest_role_type = acrequest.acrequest_role_type ? acrequest.acrequest_role_type : "";
            this.acrequest_prof_id = acrequest.acrequest_prof_id ? acrequest.acrequest_prof_id : []; 
            this.acrequest_response = acrequest.acrequest_response ? acrequest.acrequest_response : [];
            this.acrequest_remarks = acrequest.acrequest_remarks ? acrequest.acrequest_remarks : [];
            this.acrequest_date_created = acrequest.acrequest_date_created ? acrequest.acrequest_date_created : new Date();
            this.acrequest_status = acrequest.acrequest_status ? acrequest.acrequest_status : "";
        }   
        else{
            this.acrequest_type = "";
            this.acrequest_stud_id = "";
            this.acrequest_role_type = "";
            this.acrequest_prof_id = []; 
            this.acrequest_response = [];
            this.acrequest_remarks = [];
            this.acrequest_date_created = new Date();
            this.acrequest_status = "";

        }
    }

    setACPanelMemberRequest(
        acrequest_type, 
        acrequest_stud_id, 
        acrequest_role_type, 
        acrequest_prof_id, 
        acrequest_response, 
        acrequest_remarks, 
        acrequest_date_created,
        acrequest_status
    ){
        this.acrequest_type = acrequest_type;
        this.acrequest_stud_id = acrequest_stud_id;
        this.acrequest_role_type = acrequest_role_type;
        this.acrequest_prof_id = acrequest_prof_id;
        this.acrequest_response = acrequest_response;
        this.acrequest_remarks = acrequest_remarks;
        this.acrequest_date_created = acrequest_date_created;
        this.acrequest_status = acrequest_status;
    }

    getACPanelMemberRequestId(){
        return this._id;
    }
    getACPanelMemberRequestType(){
        return this.acrequest_type;
    }
    getACPanelMemberRequestStudId(){
        return this.acrequest_stud_id;
    }
    getAddChangePanelMemberRequestRoleType(){
        return this.acrequest_role_type;
    }
    getACPanelMemberRequestProfId(){
        return this.acrequest_prof_id;
    }
    getACPanelMemberRequestResponse(){
        return this.acrequest_response;
    }
    getACPanelMemberRequestRemarks(){
        return this.acrequest_remarks;
    }
    getACPanelMemberRequestDateCreated(){
        return this.acrequest_date_created;
    }
    getACPanelMemberRequestStatus(){
        return this.acrequest_status;
    }

    setACPanelMemberRequestId(_id){
        this._id = _id;
    }
    setACPanelMemberRequestType(acrequest_type){
        this.acrequest_type = acrequest_type;
    }
    setACPanelMemberRequestStudId(acrequest_stud_id){
        this.acrequest_stud_id = acrequest_stud_id;
    }
    setAddChangePanelMemberRequestRoleType(acrequest_role_type){
        this.acrequest_role_type = acrequest_role_type;
    }
    setACPanelMemberRequestProfId(acrequest_prof_id){
        this.acrequest_prof_id = acrequest_prof_id;
    }
    setACPanelMemberRequestResponse(acrequest_response){
        this.acrequest_response;
    }
    setACPanelMemberRequestRemarks(acrequest_remarks){
        this.acrequest_remarks = acrequest_remarks;
    }
    setACPanelMemberRequestDateCreated(acrequest_date_created){
        this.acrequest_date_created = acrequest_date_created;
    }
    setACPanelMemberRequestStatus(acrequest_status){
        this.acrequest_status = acrequest_status;
    }
}