export class Panel{
    //stores panelmemberuserID 
    private adviser_id: string;
    private adviser_name: string;
    private coadviser_id: string;
    private coadviser_name: string;
    private panelist1_id: string;
    private panelist1_name: string;
    private panelist2_id: string;
    private panelist2_name: string;
    private panelist3_id: string;
    private panelist3_name: string;

    constructor(panel?: any){
        if(panel){
            this.adviser_id = panel.adviser_id ? panel.adviser_id : "";
            this.adviser_name = panel.adviser_name ? panel.adviser_name : ""; 
            this.coadviser_id = panel.coadviser_id ? panel.coadviser_id : "";
            this.coadviser_name = panel.coadviser_name ? panel.coadviser_name : "";
            this.panelist1_id = panel.panelist1_id ? panel.panelist1_id : "";
            this.panelist1_name = panel.panelist1_name ? panel.panelist1_name : "";
            this.panelist2_id = panel.panelist2_id ? panel.panelist2_id : "";
            this.panelist2_name = panel.panelist2_name ? panel.panelist2_name : "";
            this.panelist3_id = panel.panelist3_id ? panel.panelist3_id : "";
            this.panelist3_name = panel.panelist3_name ? panel.panelist3_name : "";
        }
        else{
            this.adviser_id = "";
            this.adviser_name = "";
            this.coadviser_id = "";
            this.coadviser_name = "";
            this.panelist1_id = "";
            this.panelist1_name = "";
            this.panelist2_id = "";
            this.panelist2_name = "";
            this.panelist3_id = "";
            this.panelist3_name = "";
        }
    }

    setPanel(
        adviser_id, 
        adviser_name, 
        coadviser_id, 
        coadviser_name,
        panelist1_id, 
        panelist1_name,
        panelist2_id, 
        panelist2_name,
        panelist3_id,
        panelist3_name
    ){
        this.adviser_id = adviser_id;
        this.adviser_name = adviser_name;
        this.coadviser_id = coadviser_id;
        this.coadviser_name = coadviser_name;
        this.panelist1_id = panelist1_id;
        this.panelist1_name = panelist1_name;
        this.panelist2_id = panelist2_id;
        this.panelist2_name = panelist2_name;
        this.panelist3_id = panelist3_id;
        this.panelist3_name = panelist3_name;
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
    getPanelAdviserName(){
        return this.adviser_name;
    }
    getPanelCoAdviserName(){
        return this.coadviser_name;
    }
    getPanelPanelist1Name(){
        return this.panelist1_name;
    }
    getPanelPanelist2Name(){
        return this.panelist2_name;
    }
    getPanelPanelist3Name(){
        return this.panelist3_name;
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
    setPanelAdviserName(adviser_name){
        this.adviser_name = adviser_name;
    }
    setPanelCoAdviserName(coadviser_name){
        this.coadviser_name = coadviser_name;
    }
    setPanelPanelist1Name(panelist1_name){
        this.panelist1_name = panelist1_name;
    }
    setPanelPanelist2Name(panelist2_name){
        this.panelist2_name = panelist2_name;
    }
    setPanelPanelist3Name(panelist3_name){
        this.panelist3_name =panelist3_name;
    }
}