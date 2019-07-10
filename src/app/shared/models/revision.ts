export class Revision{
    //if the author aproved, it cannot request a revision anymore. (Is the Approval reversible?? No)
    //is_author_satisfied == true, irreversible
    private author_id: string; //stores om or other_user id
    private author_name: string;
    private author_role: string; //adviser, co-adviser, panelist, dept-chair, dean, col-sec
    private date_created: Date;
    private content: string;
    private remarks: string[]; //if the author is unsatisfied with the revision & doesn't want to create a new object
    private is_student_done: boolean; //done or undone (based on the student's judgement) 
    private is_author_satisfied: boolean; //unsatisfied or satisfied (the final decision to close a revision request)
    private is_returned: boolean; //if true, is_student_done = false(undone)
    private date_returned: Date;

    constructor(revision?: Revision){
        if(revision){
            this.author_id = revision.author_id ? revision.author_id : "";
            this.author_name = revision.author_name ? revision.author_name : "";
            this.author_role = revision.author_role ? revision.author_role : ""; 
            this.date_created = revision.date_created ? new Date(revision.date_created) : new Date();
            this.content = revision.content ? revision.content : "";
            this.remarks = revision.remarks ? revision.remarks : [];
            this.is_student_done = revision.is_student_done ? revision.is_student_done : false;
            this.is_author_satisfied = revision.is_author_satisfied ? revision.is_author_satisfied : false;
            this.is_returned = revision.is_returned ? revision.is_returned : false;
            this.date_returned = revision.date_returned ? new Date(revision.date_returned) : new Date(); 
        }
        else{
            this.author_id = "";
            this.author_name = "";
            this.author_role = "";
            this.date_created = new Date();
            this.content = "";
            this.remarks = [];
            this.is_student_done = false;
            this.is_author_satisfied = false;
            this.is_returned = false;
            this.date_returned = new Date(); 
        }
    }

    setRevision(
        author_id, 
        author_name, 
        author_role,
        date_created, 
        content, 
        remarks, 
        is_student_done, 
        is_author_satisfied, 
        is_returned, 
        date_returned
    ){
        this.author_id = author_id;
        this.author_name = author_name;
        this.author_role = author_role;
        this.date_created = date_created
        this.content = content; 
        this.remarks = remarks;
        this.is_student_done = is_student_done;
        this.is_author_satisfied = is_author_satisfied;
        this.is_returned = is_returned;
        this.date_returned = date_returned;
    }

    getAuthorId(){
        return this.author_id;
    }
    getAuthorName(){
        return this.author_name;
    }
    getAuthorRole(){
        return this.author_role;
    }
    getDateCreated(){
        return this.date_created;
    }
    getContent(){
        return this.content;
    }
    getRemarks(){
        return this.remarks;
    }
    getIsStudentDone(){
        return this.is_student_done;
    }
    getIsAuthorSatisfied(){
        return this.is_author_satisfied;
    }
    getIsReturned(){
        return this.is_returned;
    }
    getDateReturned(){
        return this.date_returned;
    }

    setAuthorId(author_id){
        this.author_id =author_id;
    }
    setAuthorName(author_name){
        this.author_name =author_name;
    }
    setAuthorRole(author_role){
        this.author_role = author_role;
    }
    setDateCreated(date_created){
        this.date_created =date_created;
    }
    setContent(content){
        this.content = content;
    }
    setRemarks(remarks){
        this.remarks = remarks;
    }
    setIsStudentDone(is_student_done){
        this.is_student_done = is_student_done;
    }
    setIsAuthorSatisfied(is_author_satisfied){
        this.is_author_satisfied = is_author_satisfied;
    }
    setIsReturned(is_returned){
        this.is_returned = is_returned;
    }
    setDateReturned(date_returned){
        this.date_returned =date_returned;
    }
}