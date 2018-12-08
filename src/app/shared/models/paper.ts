export class Paper{
    private proposal_file: any;
    private manus_file: any; 

    constructor(paper? :any){
        if(paper){
            this.proposal_file = paper.proposal_file ? paper.proposal_file : "";
            this.manus_file = paper.manus_file ? paper.manus_file : "";
        }
        else{
            this.proposal_file = "";
            this.manus_file = "";
        }
    }


    getPaperProposalFile(){
        return this.proposal_file;
    }
    getPaperManusFile(){
        return this.manus_file;
    }

    setPaperProposalFile(proposal_file){
        this.proposal_file = proposal_file;
    }
    setPaperManusFile(manus_file){
        this.manus_file = manus_file; 
    }
    
}