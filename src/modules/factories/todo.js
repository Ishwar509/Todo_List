
class Step{
    constructor(title = '', isComplete = false){
        this.title = title;
        this.isComplete = isComplete;
    }
};

class Todo {
    constructor(title = '', dueDate = '', priority = '', checklist = [], isComplete = false, note = ''){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.isComplete = isComplete;
        this.note = note;
        this.createDate = new Date().toDateString();
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

export {Step, Todo};