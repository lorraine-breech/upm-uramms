import { Paper } from "./paper";
import { ExpectedConditions } from "protractor";

export class Study{
    private _id: string;
    private study_title: string;
    private study_description: string;
    private study_paper: Paper; 
    private study_status: string; 

    constructor(study?: any){
        if(study){
            this._id = study._id ? study._id : "";
            this.study_title = study.study_title ? study.study_title: "";
            this.study_description = study.study_description ? study.study_description : "";
            this.study_paper = new Paper(study.study_paper);
            this.study_status = "";
        }
        else{
            this.study_title = "";
            this.study_description = "";
            this.study_paper = new Paper();
            this.study_status = "";
        }
    }

    setStudy( study_title, study_description, study_paper, study_status){
        this.study_title = study_title;
        this.study_description = study_description;
        this.study_paper = study_paper;
        this.study_status = study_status;
    }

    getStudyId(){
        return this._id;
    }

    getStudyTitle(){
        return this.study_title;
    }

    getStudyDescription(){
        return this.study_description;
    }

    getStudyPaper(){
        return this.study_paper;
    }

    getStudyStatus(){
        return this.study_status;
    }

    setStudyId(_id){
        this._id = _id;
    }

    setStudyTitle(tudy_title){
        this.study_title = tudy_title;
    }

    setStudyDescription(study_description){
        this.study_description = study_description;
    }

    setStudyPaper(study_paper){
        this.study_paper = study_paper;
    }

    setStudyStatus(study_status){
        this.study_status = study_status;
    }


}