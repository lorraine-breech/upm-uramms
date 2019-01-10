export class Department{
    private _id: string;
    private col_id: string;
    private dept_name: string;

    constructor(department?:any){
        if(department){
            this._id = department._id ? department._id : "";
            this.col_id = department.col_id ? department.col_id : "";
            this.dept_name = department.dept_name ? department.dept_name : "";
        }
        else{
            this.col_id = "";
            this.dept_name =  "";
        }
    }

    setCourse(col_id, dept_name){
        this.col_id = col_id;
        this.dept_name = dept_name;
    }

    getDeptId(){
        return this._id;
    }
    
    getDeptColId(){
        return this.col_id;
    }
    
    getDeptName(){
        return this.dept_name;
    }

    setDeptId(_id){
        this._id = _id;
    }

    setDeptColId(col_id){
        this.col_id = col_id;
    }

    setDeptName(dept_name){
        this.dept_name = dept_name;
    }
}