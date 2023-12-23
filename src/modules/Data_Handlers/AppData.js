import defaultProjects from "./dummyData";
import LocalStorage from "./LocalStorage";
import Project from "../factories/project";
import Todo from "../factories/todo";

class AppData {
    static getData(){
        let projectList = LocalStorage.retrieveData('projectList');
        
        if(!projectList) return defaultProjects;
        
        return this.getmodifiedData(projectList);
    }

    static getmodifiedData(projectList){
        const modifiedList = [];

        for(let project of projectList){
            
            let modifiedtodoList = [];

            for(let todo of project.todoList){
                modifiedtodoList.push(new Todo(todo));
            }

            let modifiedProject = new Project(project);
            Object.assign(modifiedProject, {todoList: modifiedtodoList});

            modifiedList.push(modifiedProject);
        }

        return modifiedList;
    }
};

export default AppData;