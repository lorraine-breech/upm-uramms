
export class Activity{
    private _id: string;
    private activity_type: string; //delete, modify, add
    private activity_user_id: string;
    private activity_user_name: string;
    private activity_subject_id: string;
    private activity_subject_type: string;
    private activity_subject_name: string;
    private activity_date: Date;
    private activity_remarks: string; 

    constructor(activity? : any){
        if(activity){
            this._id = activity._id ? activity._id : "";
            this.activity_type = activity.activity_type ? activity.activity_type : "";
            this.activity_user_id = activity.activity_user_id ? activity.activity_user_id : "";
            this.activity_user_name = activity.activity_user_name ? activity.activity_user_name : "";
            this.activity_subject_id = activity.activity_subject_id ? activity.activity_subject_id : "";
            this.activity_subject_name = activity.activity_subject_name ? activity.activity_subject_name : "";
            this.activity_subject_type = activity.activity_subject_type ? activity.activity_subject_type : "";
            this.activity_date = activity.activity_date ? new Date(activity.activity_date) : new Date();
            this.activity_remarks = activity.activity_remarks ? activity.activity_remarks : "";
        }
        else{
            this.activity_type = "";
            this.activity_user_id = "";
            this.activity_user_name = "";
            this.activity_subject_id = "";
            this.activity_subject_name = "";
            this.activity_subject_type = "";
            this.activity_date = new Date();
            this.activity_remarks = "";
        }
    }

    setActivity(
        activity_type, 
        activity_user_id, 
        activity_user_name, 
        activity_subject_id, 
        activity_subject_name, 
        activity_subject_type, 
        activity_date, 
        activity_remarks
    ){
        this.activity_type = activity_type;
        this.activity_user_id = activity_user_id;
        this.activity_user_name = activity_user_name;
        this.activity_subject_id = activity_subject_id;
        this.activity_subject_name = activity_subject_name;
        this.activity_subject_type = activity_subject_type;
        this.activity_date = activity_date;
        this.activity_remarks = activity_remarks;
    }

    getActivityId(){
        return this._id;
    }
    getActivityType(){
        return this.activity_type;
    }
    getActivityUserId(){
        return this.activity_user_id;
    }
    getActivityUserName(){
        return this.activity_user_name;
    }
    getActivitySubjectId(){
        return this.activity_subject_id;
    }
    getActivitySubjectName(){
        return this.activity_subject_name;
    }
    getActivitySubjectType(){
        return this.activity_subject_type;
    }
    getActivityDate(){
        return this.activity_date;
    }
    getActivityRemarks(){
        return this.activity_remarks;
    }

    setActivityId(_id){
        this._id = _id;
    }
    setActivityType(activity_type){
        this.activity_type = activity_type;
    }
    setActivityUserId(activity_user_id){
        this.activity_user_id = activity_user_id;
    }
    setActivityUserName(activity_user_name){
        this.activity_user_name = activity_user_name;
    }
    setActivitySubjectId(activity_subject_id){
        this.activity_subject_id = activity_subject_id;
    }
    setActivitySubjectName(activity_subject_name){
        this.activity_subject_name = activity_subject_name;
    }
    setActivitySubjectType(activity_subject_type){
        this.activity_subject_type = activity_subject_type;
    }
    setActivityDate(activity_date){
        this.activity_date = activity_date;
    }
    setActivityRemarks(activity_remarks){
        this.activity_remarks = activity_remarks;
    }
}