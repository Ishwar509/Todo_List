import Project from "./factories/project.js";
import { Step, Todo } from "./factories/todo.js";


class DataManager {
    constructor(projects){
        this.ProjectList = new Map();
        this.init(projects);
    }

    init(projects){
        projects.forEach(project => {
            this.ProjectList.set(this.getUID(), project);
        });
    }

    addProject(title, todoList){
        let project = new Project(title, todoList);
        this.ProjectList.set(this.getUID(), project);
    }

    getUID(){
        let randomNum = Math.floor(Math.random() * 1e9);
        return randomNum.toString(36);
    }
};


const todoArray = [
    new Todo("Task 1", "2023-12-20", "High", [new Step("Step 1", false), new Step("Step 2", true)], false),
    new Todo("Task 2", "2023-12-21", "Medium", [new Step("Step 1", false), new Step("Step 2", true)], false),
    new Todo("Task 3", "2023-12-22", "Low", [new Step("Step 1", false), new Step("Step 2"), true], true),
    new Todo("Task 4", "2023-12-23", "High", [new Step("Step 1", false), new Step("Step 2"), true], false),
    new Todo("Task 5", "2023-12-24", "Medium", [new Step("Step 1", false), new Step("Step 2"), true], false),
    new Todo("Task 6", "2023-12-25", "Low", [new Step("Step 1", false), new Step("Step 2"), true], true),
    new Todo("Task 7", "2023-12-26", "High", [new Step("Step 1", false), new Step("Step 2"), true], false),
    new Todo("Task 8", "2023-12-27", "Medium", [new Step("Step 1", false), new Step("Step 2"), true], false),
    new Todo("Task 9", "2023-12-28", "Low", [new Step("Step 1", false), new Step("Step 2"), true], true),
    new Todo("Task 10", "2023-12-29", "High", [new Step("Step 1", false), new Step("Step 2"), true], false)
];


let defaultProjects = [new Project('Today', [], 'default'), new Project('Important', [], 'default'), 
                    new Project('Completed', [], 'default'), new Project('Tasks', todoArray, 'default')];


const dataManager = new DataManager(defaultProjects);

export default dataManager;