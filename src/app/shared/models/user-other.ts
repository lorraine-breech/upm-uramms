//this seems useless now, but will be keeping this for future spanning

export class OtherUser{
    private _id: string;
    private other_prof_id: string;
    private other_type: string;
    private other_is_panel_member: string; //if so, this will contain the panel user id; else, an empty string

    constructor(otherUser?: any){
        if(otherUser){
            this._id = otherUser._id ? otherUser._id : "" ;
            this.other_prof_id = otherUser.other_prof_id ? otherUser.other_prof_id : "";
            this.other_type = otherUser.other_type ? otherUser.other_type : "";
            this.other_is_panel_member = otherUser.other_is_panel_member ? otherUser.other_is_panel_member : "";
        }
        else{
            this.other_prof_id = "";
            this.other_type = "";
            this.other_is_panel_member = "";
        }
    }

    setOtherUser(other_prof_id, other_type, other_is_panel_member){
        this.other_prof_id = other_prof_id;
        this.other_type = other_type;
        this.other_is_panel_member = other_is_panel_member;
    }

    getOtherUserId(){
        return this._id;
    }
    getOtherUserProfId(){
        return this.other_prof_id;
    }
    getOtherUserType(){
        return this.other_type;
    }
    getOtherUserIsPM(){
        return this.other_is_panel_member;
    }

    setOtherUserId(_id){
        this._id = _id;
    }
    setOtherUserProfId(other_prof_id){
        this.other_prof_id = other_prof_id;
    }
    setOtherUserType(other_type){
        this.other_type = other_type;
    }
    setOtherUserIsPM(other_is_panel_member){
        this.other_is_panel_member = other_is_panel_member;
    }
} 