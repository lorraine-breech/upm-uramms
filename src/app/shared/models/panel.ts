export class Panel{
    private adviser_id: string;
    private coadviser_id: string;
    private panelist1_id: string;
    private panelist2_id: string;
    private panelist3_id: string;

    constructor(panel?: any){
        if(panel){
            this.adviser_id = panel.adviser_id ? panel.adviser_id : "";
            this.coadviser_id = panel.coadviser_id ? panel.coadviser_id : "";
            this.panelist1_id = panel.panelist1_id ? panel.panelist1_id : "";
            this.panelist2_id = panel.panelist2_id ? panel.panelist2_id : "";
            this.panelist3_id = panel.panelist3_id ? panel.panelist3_id : "";
        }
        else{
            this.adviser_id = "";
            this.coadviser_id = "";
            this.panelist1_id = "";
            this.panelist2_id = "";
            this.panelist3_id = "";
        }
    }

    setPanel(adviser_id, coadviser_id, panelist1_id, panelist2_id, panelist3_id){
        this.adviser_id = adviser_id;
        this.coadviser_id = coadviser_id;
        this.panelist1_id = panelist1_id;
        this.panelist2_id = panelist2_id;
        this.panelist3_id = panelist3_id;
    }

    getPanelAdviserId(){
        return this.adviser_id;
    }
    getPanelCoAdviserId(){
        return this.coadviser_id;
    }
    getPanelPanelist1Id(){
        return this.panelist1_id;
    }
    getPanelPanelist2Id(){
        return this.panelist2_id;
    }
    getPanelPanelist3Id(){
        return this.panelist3_id;
    }

    setPanelAdviserId(adviser_id){
        this.adviser_id = adviser_id;
    }
    setPanelCoAdviserId(coadviser_id){
        this.coadviser_id = coadviser_id;
    }
    setPanelPanelist1Id(panelist1_id){
        this.panelist1_id = panelist1_id;
    }
    setPanelPanelist2Id(panelist2_id){
        this.panelist2_id = panelist2_id;
    }
    setPanelPanelist3Id(panelist3_id){
        this.panelist3_id = panelist3_id;
    }
}