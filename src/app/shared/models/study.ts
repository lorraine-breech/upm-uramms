export class Study{
    private _id: string;
    private title: string; 
    private description: string;
    private paper_proposal: string; //stores the name of the uploaded proposal file
    private paper_manuscript: string; //stores the name of the uploaded manuscript file 
    private status: string; 
    //research status: Proposal Writing, Proposal presentation (P Schedule requested)    
    //Proposal Approval (Presentation Approved), Implementation (Proposal Paper Approved), 
    //Manus Writing, Manus Approval, Manus Approved, Completed
 
    constructor(study?: any){
        if(study){
            this._id = study._id ? study._id : "";
            this.title = study.title ? study.title: "";
            this.description = study.description ? study.description : "";
            this.paper_proposal = study.paper_proposal ? study.paper_proposal: "";
            this.paper_manuscript = study.paper_manuscript ? study.paper_manuscript : "";
            this.status = study.status ? study.status : "";
        }
        else{
            this.title = "";
            this.description = ""; 
            this.paper_proposal = "";
            this.paper_manuscript = "";
            this.status = "";
        }
    }

    setStudy( title, description, paper_proposal, paper_manuscript, status){
        this.title = title;
        this.description = description;
        this.paper_proposal = paper_proposal;
        this.paper_manuscript = paper_manuscript;
        this.status = status;
    }

    getStudyId(){
        return this._id;
    }

    getStudyTitle(){
        return this.title;
    }

    getStudyDescription(){
        return this.description;
    }

    getStudyPaperProposal(){
        return this.paper_proposal;
    }
    getStudyPaperManuscript(){
        return this.paper_manuscript;
    }

    getStudyStatus(){
        return this.status;
    }

    setStudyId(_id){
        this._id = _id;
    }

    setStudyTitle(title){
        this.title = title;
    }

    setStudyDescription(description){
        this.description = description;
    }

    setStudyPaperProposal(paper_proposal){
        this.paper_proposal = paper_proposal;
    }

    setStudyPaperManuscript(paper_manuscript){
        this.paper_manuscript = paper_manuscript;
    }

    setStudyStatus(status){
        this.status = status;
    }


}