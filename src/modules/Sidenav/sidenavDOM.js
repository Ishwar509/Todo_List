

class SidenavDOM {
    constructor(){
        this.defaultList = document.querySelector('.projects.default');
        this.userList = document.querySelector('.projects.user');
    }

    createElement(type, classList = []){
        let element = document.createElement(type);
        
        classList.forEach(value => {
            element.classList.add(value);
        });

        return element;
    }

    createTitleElement(title){
        let titleElement = this.createElement('p', ['title']);
        titleElement.textContent = title;
        
        return titleElement;
    }

    createTaskCounter(count){
        let taskCounterElement = this.createElement('p', ['taskCount']);
        taskCounterElement.textContent = count;

        return taskCounterElement;
    }

    createProjectItem(projectId, project){
        let projectItem = this.createElement('li');
        projectItem.dataset.uid = projectId;

        projectItem.appendChild(this.createTitleElement(project.title));

        if(project.todoList.length > 0){
            projectItem.appendChild(this.createTaskCounter(project.todoList.length));
        }

        return projectItem;
    }

    renderProjects(list){
        this.defaultList.innerHTML = "";
        this.userList.innerHTML = "";
        
        for(let [uid, project] of list){
            let projectItem = this.createProjectItem(uid, project);

            if(project.type === 'default'){
                this.defaultList.appendChild(projectItem);
            }
            else{
                this.userList.appendChild(projectItem);
            }
        }
    }
};

export default SidenavDOM;