export class User{
    private _id: string;
    private user_type: string;
    private user_type_id: string;
    private user_username: string;
    private user_password: string;

    constructor(user?: any){
        if(user){
            this._id = user._id ? user._id : "";
            this.user_type = user.user_type ? user.user_type : "";
            this.user_type_id = user.user_type_id ? user.user_type_id : "";
            this.user_username = user.user_username ? user.user_username : "";
            this.user_password = user.user_password ? user.user_password : "";
        }
        else{
            this.user_type = "";
            this.user_type_id = "";
            this.user_username = "";
            this.user_password = "";
        }
    }

    setUser(user_type, user_type_id, user_username, user_password){
        this.user_type = user_type;
        this.user_type_id = user_type_id;
        this.user_username = user_username;
        this.user_password = user_password;
    }

    getUserId(){
        return this._id;
    }
    getUserType(){
        return this.user_type;
    }
    getUserTypeId(){
        return this.user_type_id;
    }
    getUserUsername(){
        return this.user_username;
    }
    getUserPassword(){
        return this.user_password;
    }

    setUserId(_id){
        this._id = _id;
    }
    setUserType(user_type){
        this.user_type = user_type;
    }
    setUserTypeId(user_type_id){
        this.user_type_id = user_type_id;
    }
    setUserUsername(user_username){
        this.user_username = user_username;
    }
    setUserPassword(user_password){
        this.user_password = user_password;
    }

}