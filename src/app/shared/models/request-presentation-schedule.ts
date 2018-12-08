import { Panel } from "./panel";

export class PresentationScheduleRequest{
    private _id: string;
    private psrequest_stud_id: string;
    private psrequest_pres_type: string;
    private psrequest_pres_date: Date;
    private psrequest_pres_time_start: string; // temporary type
    private psrequest_pres_time_end: string; // temporary type
    private psrequest_panel: Panel;
    private psrequest_response: string[];
    private psrequest_remarks: string[];
    private psrequest_date_created: Date;
    private psrequest_status: string;

    constructor(psrequest? : any){
        if(psrequest){
            this._id = psrequest._id ? psrequest._id : "";
            this.psrequest_stud_id = psrequest.psrequest_stud_id ? psrequest.psrequest_stud_id : "";
            this.psrequest_pres_type = psrequest.psrequest_pres_type ? psrequest.psrequest_pres_type : "";
            this.psrequest_pres_date = psrequest.psrequest_pres_date ? new Date(psrequest.psrequest_pres_date) : new Date();
            this.psrequest_pres_time_start = psrequest.psrequest_pres_time_start ? psrequest.psrequest_pres_time_start : "";
            this.psrequest_pres_time_end = psrequest.psrequest_pres_time_end ? psrequest.psrequest_pres_time_end : "";
            this.psrequest_panel = psrequest.psrequest_panel ? psrequest.psrequest_panel : new Panel();
            this.psrequest_response = psrequest.psrequest_response ? psrequest.psrequest_response : [];
            this.psrequest_remarks = psrequest.psrequest_remarks ? psrequest.psrequest_remarks : [];
            this.psrequest_date_created = psrequest.psrequest_date_created ? new Date(psrequest.psrequest_date_created) : new Date();
            this.psrequest_status = psrequest.psrequest_status ? psrequest.psrequest_status : "";
        }
        else{
            this.psrequest_stud_id = "";
            this.psrequest_pres_type = "";
            this.psrequest_pres_date = new Date();
            this.psrequest_pres_time_start = "";
            this.psrequest_pres_time_end = "";
            this.psrequest_panel = new Panel();
            this.psrequest_response = [];
            this.psrequest_remarks = [];
            this.psrequest_date_created = new Date();
            this.psrequest_status = "";
        }
    }

    setPSRequest(
        psrequest_stud_id,
        psrequest_pres_type,
        psrequest_pres_date,
        psrequest_pres_time_start,
        psrequest_pres_time_end,
        psrequest_panel,
        psrequest_response,
        psrequest_remarks,
        psrequest_date_created,
        psrequest_status
    ){
        this.psrequest_stud_id = psrequest_stud_id;
        this.psrequest_pres_type = psrequest_pres_type;
        this.psrequest_pres_date = psrequest_pres_date;
        this.psrequest_pres_time_start = psrequest_pres_time_start;
        this.psrequest_pres_time_end = psrequest_pres_time_end;
        this.psrequest_panel = psrequest_panel;
        this.psrequest_response = psrequest_response;
        this.psrequest_remarks = psrequest_remarks;
        this.psrequest_date_created = psrequest_date_created;
        this.psrequest_status = psrequest_status;
    }

    getPSRequestId(){
        return this._id;
    }
    getPSRequestStudId(){
        return this.psrequest_stud_id;
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
    getPSRequestPanel(){
        return this.psrequest_panel;
    }
    getPSRequestResponse(){
        return this.psrequest_response;
    }
    getPSRequestRemarks(){
        return this.psrequest_remarks;
    }
    getPSRequestDateCreated(){
        return this.psrequest_date_created;
    }
    getPSRequestStatus(){
        return this.psrequest_status;
    }


    setPSRequestId(_id){
        this._id = _id;
    }
    setPSRequestStudId(psrequest_stud_id){
        this.psrequest_stud_id = psrequest_stud_id;
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
    setPSRequestPanel(psrequest_panel){
        this.psrequest_panel = psrequest_panel;
    }
    setPSRequestResponse(psrequest_response){
        this.psrequest_response = psrequest_response;
    }
    setPSRequestRemarks(psrequest_remarks){
        this.psrequest_remarks = psrequest_remarks;
    }
    setPSRequestDateCreated(psrequest_date_created){
        this.psrequest_date_created = psrequest_date_created;
    }
    setPSRequestStatus(psrequest_status){
        this.psrequest_status = psrequest_status;
    }
}