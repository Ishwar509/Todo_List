
class MainDOM {
    constructor(){
        this.tasklistContainer = document.querySelector('.tasklist');
        this.titleElement = document.querySelector('.projectTitle');
        this.btnGroup = document.querySelector('.btnGroup');
    }

    createTaskItem(taskId, taskName){
        let taskItem = document.createElement('li');
        taskItem.dataset.uid = taskId;

        taskItem.textContent = taskName;

        return taskItem;
    }


    renderTasks(project, tasklist){
        this.btnVisibility(project);

        this.tasklistContainer.innerHTML = "";

        this.titleElement.textContent = project.title;
        
        for(let [uid, task] of tasklist){
            let taskItem = this.createTaskItem(uid, task.title);

            this.tasklistContainer.appendChild(taskItem);
        }        
    }

    btnVisibility(project){
        if(project.type == 'default'){
            this.btnGroup.style.display = 'none';
        }
        else{
            this.btnGroup.style.display = 'block';
        }
    }
};

export default MainDOM;