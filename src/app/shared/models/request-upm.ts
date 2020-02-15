import { ReqResponse } from "./request-response";
import { Revision } from "./revision";
import { ReqStudent } from "./request-student";

export class UPMRequest{ 
    private _id: string;
    private student: ReqStudent;
    private type: string; //acrequest, psrequest, parequest, cprequest *String: convenience in displaying
    private date_created: Date; 
    private responses: ReqResponse[]; //Response object: stores pm_other_user id, prof name, prof role, response & remarks
    private is_approved: boolean; //if the request has been approved or not
    
    private psrequest_pres_type: string; //proposal or manuscript
    private psrequest_pres_date: Date; 
    private psrequest_pres_time_start: string; // temporary type
    private psrequest_pres_time_end: string; // temporary type
    private psrequest_pres_place: string;

    private acrequest_type: string; //add or change
    private acrequest_role_type: string; //role to add or change: adviser, co-adviser, or panelist
    private acrequest_student_remarks: string; //student's reason or message
    private acrequest_change_from: string; //professor's ID, as of aug 20: change to prof name
    private acrequest_change_to: string; //professors's ID, as of aug 20: change to prof name
    private acrequest_add: string; //professors's ID, as of aug 20: change to prof name

    private cprequest_proposal_file_name: string; //proposal file_name so it can be viewed or downloaded
    private cprequest_part: string;
    private cprequest_from: string;
    private cprequest_to: string;

    private parequest_paper_type: string; //proposal or manuscript
    private parequest_presentation_id: string; 
    private parequest_revisions: Revision[];//Revision Object: author (id&name&role), DC, content, remarks, isASatisfied, IsSDone, IsReturned, RD,
    private parequest_level: number; // 0=panel, 1=dept-chair, 2=dean, 3=col-sec 4=Completed
    
    

    constructor(upmrequest?: UPMRequest){
        if(upmrequest){
            this._id = upmrequest._id ? upmrequest._id : "";
            this.student = upmrequest.student ? new ReqStudent(upmrequest.student) : null;
            this.type = upmrequest.type ? upmrequest.type : ""; 
            this.responses = upmrequest.responses ? upmrequest.responses : [];
            this.date_created = upmrequest.date_created ? new Date(upmrequest.date_created) : null;
            this.is_approved = upmrequest.is_approved ? upmrequest.is_approved : null;
        
            this.psrequest_pres_type = upmrequest.psrequest_pres_type ? upmrequest.psrequest_pres_type : "";
            this.psrequest_pres_date = upmrequest.psrequest_pres_date ? new Date(upmrequest.psrequest_pres_date) : null;
            this.psrequest_pres_time_start = upmrequest.psrequest_pres_time_start ? upmrequest.psrequest_pres_time_start : "";
            this.psrequest_pres_time_end = upmrequest.psrequest_pres_time_end ? upmrequest.psrequest_pres_time_end : "";
            this.psrequest_pres_place = upmrequest.psrequest_pres_place ? upmrequest.psrequest_pres_place : "";
            
            this.acrequest_type = upmrequest.acrequest_type ? upmrequest.acrequest_type : "";
            this.acrequest_role_type = upmrequest.acrequest_role_type ? upmrequest.acrequest_role_type : "";
            this.acrequest_student_remarks = upmrequest.acrequest_student_remarks ? upmrequest.acrequest_student_remarks : "";
            this.acrequest_change_from = upmrequest.acrequest_change_from ? upmrequest.acrequest_change_from : "";
            this.acrequest_change_to = upmrequest.acrequest_change_to ? upmrequest.acrequest_change_to : "";
            this.acrequest_add = upmrequest.acrequest_add ? upmrequest.acrequest_add : "";
            
            this.cprequest_proposal_file_name = upmrequest.cprequest_proposal_file_name ? upmrequest.cprequest_proposal_file_name : "";
            this.cprequest_part = upmrequest.cprequest_part ? upmrequest.cprequest_part : "";
            this.cprequest_from = upmrequest.cprequest_from ? upmrequest.cprequest_from : "";
            this.cprequest_to = upmrequest.cprequest_to ? upmrequest.cprequest_to : "";
            
            this.parequest_paper_type = upmrequest.parequest_paper_type ? upmrequest.parequest_paper_type : "";
            this.parequest_presentation_id = upmrequest.parequest_presentation_id ? upmrequest.parequest_presentation_id : "";
            this.parequest_revisions = upmrequest.parequest_revisions ? upmrequest.parequest_revisions : []; 
            this.parequest_level = upmrequest.parequest_level ? upmrequest.parequest_level : 0; 
        
            } 
        else{
            this._id = "";
            this.student = null;
            this.type = ""; 
            this.responses = [];
            this.date_created = null;
            this.is_approved = null;
        
            this.psrequest_pres_type = "";
            this.psrequest_pres_date = null;
            this.psrequest_pres_time_start = "";
            this.psrequest_pres_time_end = "";
            this.psrequest_pres_place = "";
            
            this.acrequest_type = "";
            this.acrequest_role_type = "";
            this.acrequest_student_remarks = "";
            this.acrequest_change_from = "";
            this.acrequest_change_to = "";
            this.acrequest_add = "";
            
            this.cprequest_proposal_file_name = "";
            this.cprequest_part = "";
            this.cprequest_from =  "";
            this.cprequest_to =  "";
            
            this.parequest_paper_type = "";
            this.parequest_presentation_id = "";
            this.parequest_revisions = []; 
            this.parequest_level =  0; 
        }
    }

    public setUPMRequest(
        student, 
        type, 
        responses, 
        date_created, 
        is_approved, 
        psrequest_pres_type,
        psrequest_pres_date, 
        psrequest_pres_time_start,
        psrequest_pres_time_end, 
        psrequest_pres_place,
        acrequest_type,
        acrequest_role_type,
        acrequest_student_remarks,
        acrequest_change_from,
        acrequest_change_to,
        acrequest_add,
        cprequest_proposal_file_name,
        cprequest_part,
        cprequest_from,
        cprequest_to,
        parequest_paper_type,
        parequest_presentation_id,
        parequest_revisions, 
        parequest_level
        ){
        this.student = new ReqStudent(student);
        this.type = type; 
        this.responses = responses;
        this.date_created = new Date(date_created);
        this.is_approved = is_approved;
    
        this.psrequest_pres_type = psrequest_pres_type;
        this.psrequest_pres_date = psrequest_pres_date;
        this.psrequest_pres_time_start = psrequest_pres_time_start;
        this.psrequest_pres_time_end = psrequest_pres_time_end;
        this.psrequest_pres_place = psrequest_pres_place;
        
        this.acrequest_type = acrequest_type;
        this.acrequest_role_type = acrequest_role_type;
        this.acrequest_student_remarks = acrequest_student_remarks;
        this.acrequest_change_from = acrequest_change_from;
        this.acrequest_change_to = acrequest_change_to;
        this.acrequest_add = acrequest_add;
        
        this.cprequest_proposal_file_name = cprequest_proposal_file_name;
        this.cprequest_part = cprequest_part;
        this.cprequest_from =  cprequest_from;
        this.cprequest_to =  cprequest_to;
        
        this.parequest_paper_type = parequest_paper_type;
        this.parequest_presentation_id = parequest_presentation_id;
        this.parequest_revisions = parequest_revisions; 
        this.parequest_level =  parequest_level; 
    }

    getRequestId(){
        return this._id;
    }
    getRequestStudent(){
        return this.student;
    }
    getRequestType(){
        return this.type;
    }
    getRequestResponses(){
        return this.responses;
    }
    getRequestDateCreated(){
        return this.date_created;
    }
    getRequestIsApproved(){
        return this.is_approved;
    }
    

    getPSRequestPresType(){
        return this.psrequest_pres_type;
    }
    getPSRequestPresDate(){
        return this.psrequest_pres_date;
    }
    getPSRequestPresTimeStart(){
        return this.psrequest_pres_time_start;
    }
    getPSRequestPresTimeEnd(){
        return this.psrequest_pres_time_end;
    }
    getPSRequestPresPlace(){
        return this.psrequest_pres_place;
    }

    getACPanelMemberRequestType(){
        return this.acrequest_type;
    }
    getAddChangePanelMemberRequestRoleType(){
        return this.acrequest_role_type;
    }
    getACPanelMemberRequestStudentRemarks(){
        return this.acrequest_student_remarks;
    }
    getACPanelMemberRequestChangeFrom(){
        return this.acrequest_change_from;
    }
    getACPanelMemberRequestChangeTo(){
        return this.acrequest_change_to;
    } 
    getACPanelMemberRequestAdd(){
        return this.acrequest_add;
    }

    getCPRequestProposalFileName(){
        return this.cprequest_proposal_file_name;
    }
    getCPRequestPart(){
        return this.cprequest_part;
    }
    getCPRequestFrom(){
        return this.cprequest_from;
    }
    getCPRequestTo(){
        return this.cprequest_to; 
    }

    getPARequestPaperType(){
        return this.parequest_paper_type;
    }
    getPARequestPresentationId(){
        return this.parequest_presentation_id;
    }
    getPARequestRevisions(){
        return this.parequest_revisions;
    }
    getPARequestLevel(){
        return this.parequest_level;
    }

    setRequestId(_id){
        this._id = _id;
    }
    setRequestStudent(student){
        this.student = student;
    }
    setRequestType(type){
        this.type = type;
    }
    setRequestResponses(responses){
        this.responses = responses;
    }
    setRequestDateCreated(date_created){
        this.date_created = date_created;
    }
    setPSRequestIsApproved(is_approved){
        this.is_approved = is_approved;
    }

    setPSRequestPresType(psrequest_pres_type){
        this.psrequest_pres_type = psrequest_pres_type;
    }
    setPSRequestPresDate(psrequest_pres_date){
        this.psrequest_pres_date = psrequest_pres_date;
    }
    setPSRequestPresTimeStart(psrequest_pres_time_start){
        this.psrequest_pres_time_start = psrequest_pres_time_start;
    }
    setPSRequestPresTimeEnd(psrequest_pres_time_end){
        this.psrequest_pres_time_end = psrequest_pres_time_end;
    }
    SetPSRequestPresPlace(psrequest_pres_place){
        this.psrequest_pres_place = psrequest_pres_place;
    }

    setACPanelMemberRequestType(acrequest_type){
        this.acrequest_type = acrequest_type;
    }
    setAddChangePanelMemberRequestRoleType(acrequest_role_type){
        this.acrequest_role_type = acrequest_role_type;
    }
    setACPanelMemberRequestStudentRemarks(acrequest_student_remarks){
        this.acrequest_student_remarks = acrequest_student_remarks;
    }
    setACPanelMemberRequestChangeFrom(acrequest_change_from){
        this.acrequest_change_from = acrequest_change_from;
    }
    setACPanelMemberRequestChangeTo(acrequest_change_to){
        this.acrequest_change_to = acrequest_change_to;
    }
    setACPanelMemberRequestAdd(acrequest_add){
        this.acrequest_add = acrequest_add;
    }

    setCPRequestProposalFileName(cprequest_proposal_file_name){
        this.cprequest_proposal_file_name = cprequest_proposal_file_name;
    }
    setCPRequestPart(cprequest_part){ 
        this.cprequest_part = cprequest_part;
    }
    setCPRequestFrom(cprequest_from){
        this.cprequest_from = cprequest_from;
    }
    setCPRequestTo(cprequest_to){
        this.cprequest_to = cprequest_to;
    }

    setPARequestPaperType(parequest_paper_type){
        this.parequest_paper_type = parequest_paper_type;
    }
    setPARequestPresentationId(parequest_presentation_id){
        this.parequest_presentation_id = parequest_presentation_id;
    }
    setPARequestRevisions(parequest_revisions){
        this. parequest_revisions= parequest_revisions;
    }
    setPARequestLevel(parequest_level){
        this.parequest_level = parequest_level;
    }
}