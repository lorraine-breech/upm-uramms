export class PaperApprovalRequest{
    private _id: string;
    private parequest_stud_id: string;
    private parequest_paper_type: string;
    private parequest_presentation_id: string;
    private parequest_response: string[];
    private parequest_remarks: string[];
    private parequest_revisions_asked: string[];//temporarily, the revision details (creator, message, dateCreated) are just appended string 
    private parequest_date_created: Date;
    private parequest_status: string;
    
    constructor(parequest? : any){
        if(parequest){
            this._id = parequest._id ? parequest._id : "";
            this.parequest_stud_id = parequest.parequest_stud_id ? parequest.parequest_stud_id : "";
            this.parequest_paper_type = parequest.parequest_paper_type ? parequest.parequest_paper_type : "";
            this.parequest_presentation_id = parequest.parequest_presentation_id ? parequest.parequest_presentation_id : "";
            this.parequest_response = parequest.parequest_response ? parequest.parequest_response : [];
            this.parequest_remarks = parequest.parequest_remarks ? parequest.parequest_remarks : [];
            this.parequest_revisions_asked = parequest.parequest_revisions_asked ? parequest.parequest_revisions_asked : [];
            this.parequest_date_created = parequest.parequest_date_created ? new Date(parequest.parequest_date_created) : new Date();
            this.parequest_status = parequest.parequest_status ? parequest.parequest_status : "";  
        }
        else{
            this.parequest_stud_id = "";
            this.parequest_paper_type = "";
            this.parequest_presentation_id = "";
            this.parequest_response = [];
            this.parequest_remarks = [];
            this.parequest_revisions_asked = [];
            this.parequest_date_created = new Date();
            this.parequest_status = "";  
        }
    }

    setPARequest(
        parequest_stud_id,
        parequest_paper_type,
        parequest_presentation_id,
        parequest_response,
        parequest_remarks,
        parequest_revisions_asked,
        parequest_date_created,
        parequest_status
    ){
        this.parequest_stud_id = parequest_stud_id;
        this.parequest_paper_type = parequest_paper_type;
        this.parequest_presentation_id = parequest_presentation_id;
        this.parequest_response = parequest_response;
        this.parequest_remarks = parequest_remarks;
        this.parequest_revisions_asked = parequest_revisions_asked;
        this.parequest_date_created = parequest_date_created;
        this.parequest_status = parequest_status;  
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
        return this.parequest_response;
    }
    getPARequestRemarks(){
        return this.parequest_remarks;
    }
    getPARequestRevisions(){
        return this.parequest_revisions_asked;
    }
    getPARequestDateCreated(){
        return this.parequest_date_created;
    }
    getPARequestStatus(){
        return this.parequest_status;
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
    setPARequestResponse(parequest_response){
        this.parequest_response = parequest_response;
    }
    setPARequestRemarks(parequest_remarks){
        this.parequest_remarks = parequest_remarks;
    }
    setPARequestRevisions(parequest_revisions_asked){
        this.parequest_revisions_asked = parequest_revisions_asked;
    }
    setPARequestDateCreated(parequest_date_created){
        this.parequest_date_created = parequest_date_created;
    }
    setPARequestStatus(parequest_status){
        this.parequest_status = parequest_status;
    }
}