
class FormDataHandler {

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