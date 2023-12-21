
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
        this.dueDateElement.textContent = `Due-Date: ${task.dueDate}`;
        this.noteElement.textContent = task.note;
        this.priorityElement.textContent = `Priority: ${task.priority}`;
        this.createDateElement.textContent = `Created on: ${task.createDate}`;

        this.checklistElement.innerHTML = "";
        
        for(let step of task.checklist){
            let listElement = document.createElement('li');
            listElement.textContent = step;

            this.checklistElement.appendChild(listElement);
        }
    }
};

export default AsideDOM;