export class Presentation{
    private _id: string;
    private stud_id: string;
    private adviser_id: string;
    private coadviser_id: string;
    private panelist1_id: string;
    private panelist2_id: string;
    private panelist3_id: string;
    private study_id: string;
    private presentation_type: string; //'proposal' or 'manuscript'

    constructor(presentation?: any){
        if(presentation){
            this._id = presentation._id ? presentation._id : "";
            this.stud_id = presentation.stud_id ? presentation.stud_id : "";
            this.adviser_id = presentation.adviser_id ? presentation.adviser_id : "";
            this.coadviser_id = presentation.coadviser_id ? presentation.coadviser_id : "";
            this.panelist1_id = presentation.panelist1_id ? presentation.panelist1_id : "";
            this.panelist2_id = presentation.panelist2_id ? presentation.panelist2_id : "";
            this.panelist3_id = presentation.panelist3_id ? presentation.panelist3_id : "";
            this.study_id = presentation.study_id ? presentation.study_id : "";
            this.presentation_type = presentation.presentation_type ? presentation.presentation_type : "";
        }
        else{
            this.stud_id = "";
            this.adviser_id = "";
            this.coadviser_id = "";
            this.panelist1_id = "";
            this.panelist2_id = "";
            this.panelist3_id = "";
            this.study_id = "";
            this.presentation_type = "";
        }
    }

    setPanel(
        stud_id, 
        adviser_id, 
        coadviser_id, 
        panelist1_id, 
        panelist2_id, 
        panelist3_id, 
        study_id, 
        presentation_type
    ){
        this.stud_id = stud_id;
        this.adviser_id = adviser_id;
        this.coadviser_id = coadviser_id;
        this.panelist1_id = panelist1_id;
        this.panelist2_id = panelist2_id;
        this.panelist3_id = panelist3_id;
        this.study_id = study_id;
        this.presentation_type = presentation_type;
    }
    getPresentationId(){
        return this._id;
    }
    getPresentationStudentId(){
        return this.stud_id;
    }
    getPresentationAdviserId(){
        return this.adviser_id;
    }
    getPresentationCoAdviserId(){
        return this.coadviser_id;
    }
    getPresentationPanelist1Id(){
        return this.panelist1_id;
    }
    getPresentationPanelist2Id(){
        return this.panelist2_id;
    }
    getPresentationPanelist3Id(){
        return this.panelist3_id;
    }
    getPresentationStudyId(){
        return this.study_id;
    }
    getPresentationType(){
        return this.presentation_type;
    }


    setPresentationId(_id){
        return this._id = _id;
    }
    setPresentationStudentId(stud_id){
        this.stud_id = stud_id;
    }
    setPresentationAdviserId(adviser_id){
        this.adviser_id = adviser_id;
    }
    setPresentationCoAdviserId(coadviser_id){
        this.coadviser_id = coadviser_id;
    }
    setPresentationPanelist1Id(panelist1_id){
        this.panelist1_id = panelist1_id;
    }
    setPresentationPanelist2Id(panelist2_id){
        this.panelist2_id = panelist2_id;
    }
    setPresentationPanelist3Id(panelist3_id){
        this.panelist3_id = panelist3_id;
    }
    setPresentationStudyId(study_id){
        this.study_id = study_id;
    }
    setPresentationType(presentation_type){
        this.presentation_type = presentation_type;
    }
}