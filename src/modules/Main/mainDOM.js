
class MainDOM {
    constructor(){
        this.tasklistContainer = document.querySelector('.tasklist');
        this.titleElement = document.querySelector('.projectTitle');
        this.btnGroup = document.querySelector('.btnGroup');
    }

    createTaskItem(taskId, task){
        let taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');
        taskItem.dataset.uid = taskId;
        taskItem.dataset.priority = task.priority;
        taskItem.dataset.isComplete = task.isComplete;

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', taskId);
        checkbox.setAttribute('class', 'checkbox');

        if(task.isComplete) checkbox.setAttribute('checked', '');

        const title = document.createElement('div');
        title.setAttribute('class', 'title_main');
        title.textContent = task.title;

        const duedate = document.createElement('div');
        duedate.setAttribute('class', 'duedate_main');
        duedate.textContent = `Due-Date : ${task.dueDate}`;

        const delBtn = document.createElement('button');
        delBtn.setAttribute('class', 'deleteTask_main');
        delBtn.innerHTML = '&times;';

        taskItem.append(checkbox, title, duedate, delBtn);

        return taskItem;
    }

    createAlertBox(){
        let alertBox = document.createElement('div');
        alertBox.classList.add('emptyList');
        alertBox.textContent = "Project is Empty";

        return alertBox;
    }

    renderTasks(project, tasklist){
        this.btnVisibility(project);

        this.tasklistContainer.innerHTML = "";

        this.titleElement.textContent = project.title;
        
        if(project.todoList.length == 0){
            this.tasklistContainer.appendChild(this.createAlertBox());
            return;
        }

        for(let [uid, task] of tasklist){
            let taskItem = this.createTaskItem(uid, task);
            this.tasklistContainer.appendChild(taskItem);
        }        
    }

    btnVisibility(project){
        if(project.type == 'default'){
            this.btnGroup.style.visibility = 'hidden';
        }
        else{
            this.btnGroup.removeAttribute('style');
        }
    }
};

export default MainDOM;