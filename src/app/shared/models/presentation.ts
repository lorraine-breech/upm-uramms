export class Presentation{
    //stores information about the presentation, as well as the result of the presentation
    //add date and time of presentation
    private _id: string;
    private stud_id: string; 
    private adviser_id: string;
    private coadviser_id: string;
    private panelist1_id: string;
    private panelist2_id: string;
    private panelist3_id: string;
    private study_id: string;
    private presentation_type: string; //'proposal' or 'manuscript'
    private adviser_assesment: string;
    private coadviser_assesment: string;
    private panelist1_assesment: string;
    private panelist2_assesment: string; 
    private panelist3_assesment: string;
    private result: string;
    private date: Date;
    private time_start: string; // temporary type
    private time_end: string; // temporary type
    

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
            this.adviser_assesment = presentation.adviser_assesment ? presentation.adviser_assesment : "";
            this.coadviser_assesment = presentation.coadviser_assesment ? presentation.coadviser_assesment : "";
            this.panelist1_assesment = presentation.panelist1_assesment ? presentation.panelist1_assesment : "";
            this.panelist2_assesment = presentation.panelist2_assesment ? presentation.panelist2_assesment : "";
            this.panelist3_assesment = presentation.panelist3_assesment ? presentation.panelist3_assesment : "";
            this.result = presentation.result ? presentation.result : "";
            this.date = presentation.date ? presentation.date : new Date();;
            this.time_start = presentation.time_start ? presentation.time_start : "";
            this.time_end = presentation.time_end ? presentation.time_end : "";
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
            this.adviser_assesment = "";
            this.coadviser_assesment = "";
            this.panelist1_assesment = "";
            this.panelist2_assesment = "";
            this.panelist3_assesment = "";
            this.result = "";
            this.date = new Date();
            this.time_start = "";
            this.time_end = "";
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
        presentation_type,
        adviser_assesment,
        coadviser_assesment, 
        panelist1_assesment, 
        panelist2_assesment, 
        panelist3_assesment, 
        result,
        date,
        time_start,
        time_end
    ){
        this.stud_id = stud_id;
        this.adviser_id = adviser_id;
        this.coadviser_id = coadviser_id;
        this.panelist1_id = panelist1_id;
        this.panelist2_id = panelist2_id;
        this.panelist3_id = panelist3_id;
        this.study_id = study_id;
        this.presentation_type = presentation_type;
        this.adviser_assesment = adviser_assesment;
        this.coadviser_assesment = coadviser_assesment;
        this.panelist1_assesment = panelist1_assesment;
        this.panelist2_assesment = panelist2_assesment;
        this.panelist3_assesment = panelist3_assesment;
        this.result = result;
        this.date = date,
        this.time_start = time_start,
        this.time_end = time_end

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
    getAdviserAssessment(){
        return this.adviser_assesment;
    }
    getCoAdviserAssessment(){
        return this.coadviser_assesment;   
    }
    getPanellist1Assessment(){
        return this.panelist1_assesment;
    }
    getPanellist2Assessment(){
        return this.panelist2_assesment;
    }
    getPanellist3Assessment(){
        return this.panelist3_assesment;
    }
    getResult(){
        return this.result;
    }
    getDate(){
        return this.date;
    }
    getTimeStart(){
        return this.time_start;
    }
    getTimeEnd(){
        return this.time_end;
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
    setAdviserAssessment(adviser_assesment){
        this.adviser_assesment = adviser_assesment;
    }
    setCoAdviserAssessment(coadviser_assesment){
        this.coadviser_assesment = coadviser_assesment;   
    }
    setPanellist1Assessment(panelist1_assesment){
        this.panelist1_assesment = panelist1_assesment;
    }
    setPanellist2Assessment(panelist2_assesment){
        this.panelist2_assesment = panelist2_assesment;
    }
    setPanellist3Assessment(panelist3_assesment){
        this.panelist3_assesment = panelist3_assesment;
    }
    setResult(result){
        this.result = result;
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
}