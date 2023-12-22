
class FormDataHandler {

    static loadProjectData(project){
        if(project == null) return;

        document.querySelector('#projectTitleInput').value = project.title;
    }

    static loadTodoData(task){
        if(task == null) return;

        document.querySelector('#taskTitleInput').value = task.title;
        document.querySelector('#duedateInput').value = task.dueDate;
        document.querySelector('#priorityInput').value = task.priority;
        document.querySelector('#noteInput').value = task.note;
    }

    static getProjectData(){
        let title = document.querySelector('#projectTitleInput').value;
        
        return {title};
    }

    static getTodoData(){
        let title = document.querySelector('#taskTitleInput').value;
        let dueDate = document.querySelector('#duedateInput').value;
        let priority = document.querySelector('#priorityInput').value;
        let note = document.querySelector('#noteInput').value;

        return {title, dueDate, priority, note};
    }

    static getChecklistData(){
        const checklist = [];

        const items = Array.from(document.querySelector('.itemList').children);

        items.forEach((item) => {
            const step = item.querySelector('div');
            checklist.push(step.textContent);
        });

        console.log(checklist);

        return {checklist};
    }

    static createList(checklist){
        const container = document.querySelector('.itemList');
        container.innerHTML = "";

        checklist.forEach((item) => {
            const listElement = this.createItem(item);
            container.appendChild(listElement);
        });
    }

    static createItem(item){
            const listElement = document.createElement('li');
            const titleElement = document.createElement('div');
            const delBtn = document.createElement('button');
            delBtn.setAttribute('type', 'button');
            delBtn.classList.add('deleteItem');

            titleElement.textContent = item;
            delBtn.textContent = 'X';

            listElement.appendChild(titleElement);
            listElement.appendChild(delBtn);

            return listElement;
    }

    static loadChecklistData(checklist){
        FormDataHandler.createList(checklist);
    }
};

export default FormDataHandler;