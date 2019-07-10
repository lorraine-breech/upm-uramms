import { ReqResponse } from "./request-response";

export class Presentation{
    //gets created when a PSRequest has been approved and 
    //instance will be deleted if the approved PSRequest will be canceled or postponed
    //stores information about the presentation, as well as the result of the presentation
    //add date and time of presentation
    private _id: string;
    private stud_id: string; 
    private study_id: string;
    private presentation_type: string; //'proposal' or 'manuscript'
    private responses: ReqResponse[]; //Response object: stores pm_other_user id, prof name, prof role, response & remarks, date 
    private is_passed: boolean; //(true)passed or (false)failed , initial value is null
    private date: Date; //date of presentation
    private time_start: string; // time_start of presentation
    private time_end: string; // time end of presentation
    private place: string; //place of presentation
    

    constructor(presentation?: any){
        if(presentation){
            this._id = presentation._id ? presentation._id : "";
            this.stud_id = presentation.stud_id ? presentation.stud_id : "";
            this.study_id = presentation.study_id ? presentation.study_id : "";
            this.presentation_type = presentation.presentation_type ? presentation.presentation_type : "";
            this.responses = presentation.responses ? presentation.responses : [];
            this.is_passed = presentation.is_passed ? presentation.is_passed : null; 
            this.date = presentation.date ? presentation.date : new Date();
            this.time_start = presentation.time_start ? presentation.time_start : "";
            this.time_end = presentation.time_end ? presentation.time_end : "";
            this.place = presentation.place ? presentation.place : "";
        }
        else{
            this.stud_id = "";
            this.study_id = "";
            this.presentation_type = "";
            this.responses = [];
            this.is_passed = null;
            this.date = null;
            this.time_start = "";
            this.time_end = "";
            this.place = "";
        }
    }

    setPanel(
        stud_id, 
        study_id, 
        presentation_type,
        responses,
        is_passed,
        date,
        time_start,
        time_end,
        place
    ){
        this.stud_id = stud_id;
        this.study_id = study_id;
        this.presentation_type = presentation_type;
        this.responses = responses,
        this.is_passed = is_passed,
        this.date = date,
        this.time_start = time_start,
        this.time_end = time_end
        this.place = place;
    }
    getPresentationId(){
        return this._id;
    }
    getPresentationStudentId(){
        return this.stud_id;
    }
    getPresentationStudyId(){
        return this.study_id;
    }
    getPresentationType(){
        return this.presentation_type;
    }
    getPresentationResponses(){
        return this.responses;
    }
    getPresentationIsPassed(){
        return this.is_passed;
    }
    getPresentationDate(){
        return this.date;
    }
    getPresentationTimeStart(){
        return this.time_start;
    }
    getPresentationTimeEnd(){
        return this.time_end;
    }
    getPresentationPlace(){
        return this.place;
    }

    setPresentationId(_id){
        return this._id = _id;
    }
    setPresentationStudentId(stud_id){
        this.stud_id = stud_id;
    }
    setPresentationStudyId(study_id){
        this.study_id = study_id;
    }
    setPresentationType(presentation_type){
        this.presentation_type = presentation_type;
    }
    setPresentationResponses(responses){
        this.responses = responses;
    }
    setPresentationIsPassed(is_passed){
        this.is_passed = is_passed;
    }
    setDate(date){
        this.date = date;
    }
    setTimeStart(time_start){
        this.time_start = time_start;
    }
    setTimeEnd(time_end){
        this.time_end = time_end;
    }
    setPresentationPlace(place){
        this.place = place;
    }
}