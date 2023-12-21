
class FormDataHandler {

    static loadProjectData(project){
        document.querySelector('#projectTitleInput').value = project.title;
    }

    static loadTodoData(task){
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
};

export default FormDataHandler;