import { Panel } from "./panel";
import { ReqResponse } from "./request-response";

export class ChangeProposalRequest{
    private _id: string;
    private cprequest_stud_id: string; //student id
    private cprequest_proposal_file_name: string; //proposal file_name so it can be viewed or downloaded
    private cprequest_part: string;
    private cprequest_from: string;
    private cprequest_to: string;
    private cprequest_response: ReqResponse[];//Response object: stores pm_other_user id, prof name, prof role, response & remarks
    private cprequest_date_created: Date;
    private cprequest_is_approved: boolean; //null-pending 

    constructor(cprequest? : any){
        if(cprequest){
            this._id = cprequest._id ? cprequest._id : "";
            this.cprequest_stud_id = cprequest.cprequest_stud_id ? cprequest.cprequest_stud_id : "";
            this.cprequest_proposal_file_name = cprequest.cprequest_proposal_file_name ? cprequest.cprequest_proposal_file_name : "";
            this.cprequest_part = cprequest.cprequest_part ? cprequest.cprequest_part : "";
            this.cprequest_from = cprequest.cprequest_from ? cprequest.cprequest_from : "";
            this.cprequest_to = cprequest.cprequest_to ? cprequest.cprequest_to : "";
            this.cprequest_response = cprequest.cprequest_response ? cprequest.cprequest_response : [];
            this.cprequest_date_created = cprequest.cprequest_date_created ? new Date(cprequest.cprequest_date_created) : new Date();
            this.cprequest_is_approved = cprequest.cprequest_is_approved ? cprequest.cprequest_is_approved : null;
        }
        else{
            this.cprequest_stud_id = "";
            this.cprequest_proposal_file_name = "";
            this.cprequest_part = "";
            this.cprequest_from = "";
            this.cprequest_to = "";
            this.cprequest_response = [];
            this.cprequest_date_created = new Date();
            this.cprequest_is_approved = null;
        }
    }

    setCPRequest(
        cprequest_stud_id,
        cprequest_proposal_file_name,
        cprequest_part,
        cprequest_from,
        cprequest_to,
        cprequest_response,
        cprequest_date_created,
        cprequest_is_approved
    ){
        this.cprequest_stud_id = cprequest_stud_id;
        this.cprequest_proposal_file_name = cprequest_proposal_file_name;
        this.cprequest_part = cprequest_part;
        this.cprequest_from = cprequest_from;
        this.cprequest_to = cprequest_to;
        this.cprequest_response = cprequest_response;
        this.cprequest_date_created = cprequest_date_created;
        this.cprequest_is_approved = cprequest_is_approved;
    }

    getCPRequestId(){
        return this._id;
    }
    getCPRequestStudId(){
        return this.cprequest_stud_id;
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
    getCPRequestResponse(){
        return this.cprequest_response;
    }
    getCPRequestDateCreated(){
        return this.cprequest_date_created;
    }
    getCPRequestIsApproved(){
        return this.cprequest_is_approved;
    }


    setCPRequestId(_id){
        this._id = _id;
    }
    setCPRequestStudId(cprequest_stud_id){
        this.cprequest_stud_id = cprequest_stud_id;
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
    setCPRequestResponse(cprequest_response){
        this.cprequest_response = cprequest_response;
    }
    setCPRequestDateCreated(cprequest_date_created){
        this.cprequest_date_created = cprequest_date_created;
    }
    setCPRequestIsApproved(cprequest_is_approved){
        this.cprequest_is_approved = cprequest_is_approved;
    }
    
}