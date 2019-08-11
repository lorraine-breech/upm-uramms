import { ReqResponse } from "./request-response";

export class ACPanelMemberRequest{ //if change, it sh
    private _id: string;
    private acrequest_type: string; //add or change
    private acrequest_stud_id: string; //student id
    private acrequest_role_type: string; //role to add or change: adviser, co-adviser, or panelist
    private acrequest_stud_remarks: string; //student's reason or message
    private acrequest_change_from: string; //professor's ID
    private acrequest_change_to: string; // professors's ID
    private acrequest_responses: ReqResponse[]; //Response object: stores pm_other_user id, prof name, prof role, response & remarks
    private acrequest_date_created: Date;
    private acrequest_is_approved: boolean; //if the request has been approved or not

    constructor(acrequest? : any){ 
        if(acrequest){
            this._id = acrequest._id ? acrequest._id : "";
            this.acrequest_type = acrequest.acrequest_type ? acrequest.acrequest_type : "";
            this.acrequest_stud_id = acrequest.acrequest_stud_id ? acrequest.acrequest_stud_id : "";
            this.acrequest_role_type = acrequest.acrequest_role_type ? acrequest.acrequest_role_type : "";
            this.acrequest_stud_remarks = acrequest.acrequest_stud_remarks ? acrequest.acrequest_stud_remarks : "";
            this.acrequest_change_from = acrequest.acrequest_change_from ? acrequest.acrequest_change_from : "";
            this.acrequest_change_to = acrequest.acrequest_change_to ? acrequest.acrequest_change_to : "";
            this.acrequest_responses = acrequest.acrequest_response ? acrequest.acrequest_response : [];
            this.acrequest_date_created = acrequest.acrequest_date_created ? acrequest.acrequest_date_created : new Date();
            this.acrequest_is_approved = acrequest.acrequest_is_approved ? acrequest.acrequest_is_approved : null;
        }   
        else{
            this.acrequest_type = "";
            this.acrequest_stud_id = "";
            this.acrequest_role_type = "";
            this.acrequest_stud_remarks = ""; 
            this.acrequest_change_from = "";
            this.acrequest_change_to = "";
            this.acrequest_responses = [];
            this.acrequest_date_created = new Date();
            this.acrequest_is_approved = null;

        }
    }

    setACPanelMemberRequest(
        acrequest_type, 
        acrequest_stud_id, 
        acrequest_role_type, 
        acrequest_stud_remarks,
        acrequest_change_from,
        acrequest_change_to,
        acrequest_responses, 
        acrequest_date_created,
        acrequest_is_approved
    ){
        this.acrequest_type = acrequest_type;
        this.acrequest_stud_id = acrequest_stud_id;
        this.acrequest_role_type = acrequest_role_type;
        this.acrequest_stud_remarks = acrequest_stud_remarks;
        this.acrequest_change_from = acrequest_change_from;
        this.acrequest_change_to = acrequest_change_to;
        this.acrequest_responses = acrequest_responses;
        this.acrequest_date_created = acrequest_date_created;
        this.acrequest_is_approved = acrequest_is_approved;
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
    getACPanelMemberRequestStudentRemarks(){
        return this.acrequest_stud_remarks;
    }
    getACPanelMemberRequestChangeFrom(){
        return this.acrequest_change_from;
    }
    getACPanelMemberRequestChangeTo(){
        return this.acrequest_change_to;
    }
    getACPanelMemberRequestResponse(){
        return this.acrequest_responses;
    }
    getACPanelMemberRequestDateCreated(){
        return this.acrequest_date_created;
    }
    getACPanelMemberRequestIsApproved(){
        return this.acrequest_is_approved;
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
    setACPanelMemberRequestStudentRemarks(acrequest_stud_remarks){
        this.acrequest_stud_remarks = acrequest_stud_remarks;
    }
    setACPanelMemberRequestChangeFrom(acrequest_change_from){
        this.acrequest_change_from = acrequest_change_from;
    }
    setACPanelMemberRequestChangeTo(acrequest_change_to){
        this.acrequest_change_to = acrequest_change_to;
    }
    setACPanelMemberRequestResponse(acrequest_responses){
        this.acrequest_responses = acrequest_responses;
    }
    setACPanelMemberRequestDateCreated(acrequest_date_created){
        this.acrequest_date_created = acrequest_date_created;
    }
    setACPanelMemberRequestIsApproved(acrequest_is_approved){
        this.acrequest_is_approved = acrequest_is_approved;
    }
}