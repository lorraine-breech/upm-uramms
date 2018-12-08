import { Panel } from "./panel";

export class ChangeProposalRequest{
    private _id: string;
    private cprequest_stud_id: string;
    private cprequest_part: string;
    private cprequest_from: string;
    private cprequest_to: string;
    private cprequest_panel: Panel;
    private cprequest_response: string[];
    private cprequest_remarks: string[];
    private cprequest_date_created: Date;
    private cprequest_status: string;

    constructor(cprequest? : any){
        if(cprequest){
            this._id = cprequest._id ? cprequest._id : "";
            this.cprequest_stud_id = cprequest.cprequest_stud_id ? cprequest.cprequest_stud_id : "";
            this.cprequest_part = cprequest.cprequest_part ? cprequest.cprequest_part : "";
            this.cprequest_from = cprequest.cprequest_from ? cprequest.cprequest_from : "";
            this.cprequest_to = cprequest.cprequest_to ? cprequest.cprequest_to : "";
            this.cprequest_panel = cprequest.cprequest_panel ? new Panel(cprequest.cprequest_panel) : new Panel();
            this.cprequest_response = cprequest.cprequest_response ? cprequest.cprequest_response : [];
            this.cprequest_remarks = cprequest.cprequest_remarks ? cprequest.cprequest_remarks : [];
            this.cprequest_date_created = cprequest.cprequest_date_created ? new Date(cprequest.cprequest_date_created) : new Date();
            this.cprequest_status = cprequest.cprequest_status ? cprequest.cprequest_status : "";
        }
        else{
            this.cprequest_stud_id = "";
            this.cprequest_part = "";
            this.cprequest_from = "";
            this.cprequest_to = "";
            this.cprequest_panel = new Panel();
            this.cprequest_response = [];
            this.cprequest_remarks = [];
            this.cprequest_date_created = new Date();
            this.cprequest_status = "";
        }
    }

    setCPRequest(
        cprequest_stud_id,
        cprequest_part,
        cprequest_from,
        cprequest_to,
        cprequest_panel,
        cprequest_response,
        cprequest_remarks,
        cprequest_date_created,
        cprequest_status
    ){
        this.cprequest_stud_id = cprequest_stud_id;
        this.cprequest_part = cprequest_part;
        this.cprequest_from = cprequest_from;
        this.cprequest_to = cprequest_to;
        this.cprequest_panel = cprequest_panel;
        this.cprequest_response = cprequest_response;
        this.cprequest_remarks = cprequest_remarks;
        this.cprequest_date_created = cprequest_date_created;
        this.cprequest_status = cprequest_status;
    }

    getCPRequestId(){
        return this._id;
    }
    getCPRequestStudId(){
        return this.cprequest_stud_id;
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
    getCPRequestPanel(){
        return this.cprequest_panel;
    }
    getCPRequestResponse(){
        return this.cprequest_response;
    }
    getCPRequestRemarks(){
        return this.cprequest_remarks;
    }
    getCPRequestDateCreated(){
        return this.cprequest_date_created;
    }
    getCPRequestStatus(){
        return this.cprequest_status;
    }


    setCPRequestId(_id){
        this._id = _id;
    }
    setCPRequestStudId(cprequest_stud_id){
        this.cprequest_stud_id = cprequest_stud_id;
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
    setCPRequestPanel(cprequest_panel){
        this.cprequest_panel = cprequest_panel;
    }
    setCPRequestResponse(cprequest_response){
        this.cprequest_response = cprequest_response;
    }
    setCPRequestRemarks(cprequest_remarks){
        this.cprequest_remarks = cprequest_remarks;
    }
    setCPRequestDateCreated(cprequest_date_created){
        this.cprequest_date_created = cprequest_date_created;
    }
    setCPRequestStatus(cprequest_status){
        this.cprequest_status = cprequest_status;
    }
    
}