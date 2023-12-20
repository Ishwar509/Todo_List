
class AsideDOM {
    constructor(){
        this.taskTitleElement = document.querySelector('.taskTitle');
        this.checklistElement = document.querySelector('.checklist');
        this.dueDateElement = document.querySelector('.duedate');
        this.noteElement = document.querySelector('.note');
        this.createDateElement = document.querySelector('.createDate');
        this.priorityElement = document.querySelector('.priority');
    }

    renderTaskInfo(task){
        this.taskTitleElement.textContent = task.title;
        this.dueDateElement.textContent = task.dueDate;
        this.noteElement.textContent = task.note;
        this.priorityElement.textContent = task.priority;
        this.createDateElement.textContent = task.createDate;

        this.checklistElement.innerHTML = "";
        
        for(let step of task.checklist){
            let listElement = document.createElement('li');
            listElement.textContent = step.title;

            this.checklistElement.appendChild(listElement);
        }
    }
};

export default AsideDOM;