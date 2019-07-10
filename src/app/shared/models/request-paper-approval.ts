import { Revision } from "./revision";
import { ReqResponse } from "./request-response";

export class PaperApprovalRequest{
    private _id: string;
    private parequest_stud_id: string; //student id
    private parequest_paper_type: string; //proposal or manuscript
    private parequest_presentation_id: string; 
    //response array of objects created when the request is created
    private parequest_responses: ReqResponse[]; //Response object: pm_other_user id, prof name, prof role, response & remarks
    private parequest_revisions: Revision[];//Revision Object: author (id&name&role), DC, content, remarks, isASatisfied, IsSDone, IsReturned, RD,
    private parequest_date_created: Date[]; //[o]=panelPA date, [1]=deptChair date, and so forth
    private parequest_level: number; // 0=panel, 1=dept-chair, 2=dean, 3=col-sec 4=Completed
    
    constructor(parequest? : any){
        if(parequest){
            this._id = parequest._id ? parequest._id : "";
            this.parequest_stud_id = parequest.parequest_stud_id ? parequest.parequest_stud_id : "";
            this.parequest_paper_type = parequest.parequest_paper_type ? parequest.parequest_paper_type : "";
            this.parequest_presentation_id = parequest.parequest_presentation_id ? parequest.parequest_presentation_id : "";
            this.parequest_responses = parequest.parequest_responses ? parequest.parequest_responses : [];
            this.parequest_revisions = parequest.parequest_revisions ? parequest.parequest_revisions : []; 
            this.parequest_date_created = parequest.parequest_date_created ? parequest.parequest_date_created : [];
            this.parequest_level = parequest.parequest_level ? parequest.parequest_level : 0; 
        }
        else{
            this.parequest_stud_id = "";
            this.parequest_paper_type = "";
            this.parequest_presentation_id = "";
            this.parequest_responses = [];
            this.parequest_revisions = [];
            this.parequest_date_created = [];
            this.parequest_level = 0;  
        }
    }

    setPARequest(
        parequest_stud_id,
        parequest_paper_type,
        parequest_presentation_id,
        parequest_responses,
        parequest_revisions,
        parequest_date_created,
        parequest_level
    ){
        this.parequest_stud_id = parequest_stud_id;
        this.parequest_paper_type = parequest_paper_type;
        this.parequest_presentation_id = parequest_presentation_id;
        this.parequest_responses = parequest_responses;
        this.parequest_revisions = parequest_revisions;
        this.parequest_date_created = parequest_date_created;
        this.parequest_level = parequest_level;  
    }

    getPARequestId(){
        return this._id;
    }
    getPARequestStudId(){
        return this.parequest_stud_id;
    }
    getPARequestPaperType(){
        return this.parequest_paper_type;
    }
    getPARequestPresentationId(){
        return this.parequest_presentation_id;
    }
    getPARequestResponse(){
        return this.parequest_responses;
    }
    getPARequestRevisions(){
        return this.parequest_revisions;
    }
    getPARequestDateCreated(){
        return this.parequest_date_created;
    }
    getPARequestLevel(){
        return this.parequest_level;
    }

    setPARequestId(_id){
        this._id = _id;
    }
    setPARequestStudId(parequest_stud_id){
        this.parequest_stud_id = parequest_stud_id;
    }
    setPARequestPaperType(parequest_paper_type){
        this.parequest_paper_type = parequest_paper_type;
    }
    setPARequestPresentationId(parequest_presentation_id){
        this.parequest_presentation_id = parequest_presentation_id;
    }
    setPARequestResponse(parequest_responses){
        this.parequest_responses = parequest_responses;
    }
    setPARequestRevisions(parequest_revisions){
        this. parequest_revisions= parequest_revisions;
    }
    setPARequestDateCreated(parequest_date_created){
        this.parequest_date_created = parequest_date_created;
    }
    setPARequestStatus(parequest_level){
        this.parequest_level = parequest_level;
    }
}