

class MainDOM {
    constructor(){
        this.tasklistContainer = document.querySelector('.tasklist');
        this.titleElement = document.querySelector('.projectTitle');
    }

    createTaskItem(taskId, taskName){
        let taskItem = document.createElement('li');
        taskItem.dataset.uid = taskId;

        taskItem.textContent = taskName;

        return taskItem;
    }


    renderTasks(project, tasklist){
        this.tasklistContainer.innerHTML = "";

        this.titleElement.textContent = project.title;
        
        for(let [uid, task] of tasklist){
            let taskItem = this.createTaskItem(uid, task.title);

            this.tasklistContainer.appendChild(taskItem);
        }        
    }
};

export default MainDOM;