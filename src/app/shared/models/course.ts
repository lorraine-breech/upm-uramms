export class Course{
    private _id: string;
    private dept_id: string;
    private course_name: string;
    private course_description: string;

    constructor(course?:any){
        if(course){
            this._id = course._id ? course._id : "";
            this.dept_id = course.dept_id ? course.dept_id : "";
            this.course_name = course.course_name ? course.course_name : "";
            this.course_description = course.course_description ? course.course_description : "";
        }
        else{
            this.dept_id = "";
            this.course_name =  "";
            this.course_description = "";
        }
    }

    setCourse(dept_id, course_name, course_description){
        this.dept_id = dept_id;
        this.course_name = course_name;
        this.course_description = course_description;
    }

    getCourseId(){
        return this._id;
    }
    
    getCourseDeptId(){
        return this.dept_id;
    }
    
    getCourseName(){
        return this.course_name;
    }

    getCourseDescription(){
        return this.course_description;
    }

    setCourseId(_id){
        this._id = _id;
    }

    setCourseDeptId(dept_id){
        this.dept_id = dept_id;
    }

    setCourseName(course_name){
        this.course_name = course_name;
    }

    setCourseDescription(course_description){
        this.course_description = course_description;
    }
}