export class College{
    private _id: string;
    private col_name: string;

    constructor(college?:any){
        if(college){
            this._id = college._id ? college._id : "";
            this.col_name = college.col_name ? college.col_name : "";
        }
        else{
            this.col_name =  "";
        }
    }

    getColId(){
        return this._id;
    }
    
    getColName(){
        return this.col_name;
    }

    setColId(_id){
        this._id = _id;
    }

    setColName(col_name){
        this.col_name = col_name;
    }
}