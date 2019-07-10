import { ReqResponse } from 'src/app/shared/models/request-response';

export class PresentationScheduleRequest{
    private _id: string; 
    private psrequest_stud_id: string; //student id
    private psrequest_pres_type: string; //proposal or manuscript
    private psrequest_pres_date: Date; 
    private psrequest_pres_time_start: string; // temporary type
    private psrequest_pres_time_end: string; // temporary type
    private psrequest_pres_place: string;
    private psrequest_response: ReqResponse[]; //Response object: stores pm_other_user id, prof name, prof role, response & remarks
    private psrequest_date_created: Date;
    private psrequest_is_approved: boolean; //true or false depends on the psreqest_response values; approved or disapproved
                                            //initial value is null
    constructor(psrequest? : any){
        if(psrequest){
            this._id = psrequest._id ? psrequest._id : "";
            this.psrequest_stud_id = psrequest.psrequest_stud_id ? psrequest.psrequest_stud_id : "";
            this.psrequest_pres_type = psrequest.psrequest_pres_type ? psrequest.psrequest_pres_type : "";
            this.psrequest_pres_date = psrequest.psrequest_pres_date ? new Date(psrequest.psrequest_pres_date) : new Date();
            this.psrequest_pres_time_start = psrequest.psrequest_pres_time_start ? psrequest.psrequest_pres_time_start : "";
            this.psrequest_pres_time_end = psrequest.psrequest_pres_time_end ? psrequest.psrequest_pres_time_end : "";
            this.psrequest_pres_place = psrequest.psrequest_pres_place ? psrequest.psrequest_pres_place : "";
            this.psrequest_response = psrequest.psrequest_response ? psrequest.psrequest_response : [];
            this.psrequest_date_created = psrequest.psrequest_date_created ? new Date(psrequest.psrequest_date_created) : new Date();
            this.psrequest_is_approved = psrequest.psrequest_is_approved ? psrequest.psrequest_is_approved : "";
        }
        else{
            this.psrequest_stud_id = "";
            this.psrequest_pres_type = "";
            this.psrequest_pres_date = new Date();
            this.psrequest_pres_time_start = "";
            this.psrequest_pres_time_end = "";
            this.psrequest_pres_place = "";
            this.psrequest_response = [];
            this.psrequest_date_created = new Date();
            this.psrequest_is_approved = null;
        }
    }

    setPSRequest(
        psrequest_stud_id,
        psrequest_pres_type,
        psrequest_pres_date,
        psrequest_pres_time_start,
        psrequest_pres_time_end,
        psrequest_pres_place,
        psrequest_response : ReqResponse[],
        psrequest_date_created,
        psrequest_is_approved
    ){
        this.psrequest_stud_id = psrequest_stud_id;
        this.psrequest_pres_type = psrequest_pres_type;
        this.psrequest_pres_date = psrequest_pres_date;
        this.psrequest_pres_time_start = psrequest_pres_time_start;
        this.psrequest_pres_time_end = psrequest_pres_time_end;
        this.psrequest_pres_place = psrequest_pres_place;
        this.psrequest_response = psrequest_response;
        this.psrequest_date_created = psrequest_date_created;
        this.psrequest_is_approved = psrequest_is_approved;
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
    getPSRequestPresPlace(){
        return this.psrequest_pres_place;
    }
    getPSRequestResponse(){
        return this.psrequest_response;
    }
    getPSRequestDateCreated(){
        return this.psrequest_date_created;
    }
    getPSRequestIsApproved(){
        return this.psrequest_is_approved;
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
    SetPSRequestPresPlace(psrequest_pres_place){
        this.psrequest_pres_place = psrequest_pres_place;
    }
    setPSRequestResponse(psrequest_response){
        this.psrequest_response = psrequest_response;
    }
    setPSRequestDateCreated(psrequest_date_created){
        this.psrequest_date_created = psrequest_date_created;
    }
    setPSRequestIsApproved(psrequest_is_approved){
        this.psrequest_is_approved = psrequest_is_approved;
    }
}