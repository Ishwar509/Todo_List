
class Todo {
    constructor({title = '', dueDate = '', priority = '', checklist = [], isComplete = false, note = '', createDate = new Date().toDateString()} = {}){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.isComplete = isComplete;
        this.note = note;
        this.createDate = createDate;
    }

    addStep(step){
        this.checklist.push(step);
    }

    changeStatus(){
        this.isComplete = !this.isComplete;
    }

    changePriority(priority){
        this.priority = priority;
    }

    changeDueDate(date){
        this.dueDate = date;
    }
};

export default Todo;