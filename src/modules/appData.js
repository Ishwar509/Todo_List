import { Todo, Step } from "./factories/todo";
import Project from "./factories/project";

const randomData1 = {
    title: 'Complete Project Proposal',
    dueDate: '2023-12-31',
    priority: 'High',
    checklist: ['Research', 'Outline', 'Draft'],
    isComplete: false,
    note: 'Important project for the upcoming deadline.',
    createDate: new Date().toDateString(),
};
  
const randomData2 = {
    title: 'Buy Groceries',
    dueDate: '2023-12-25',
    priority: 'Medium',
    checklist: ['Milk', 'Bread', 'Eggs', 'Fruits'],
    isComplete: false,
    note: 'Don\'t forget to buy fresh vegetables!',
    createDate: new Date().toDateString(),
};
  
const randomData3 = {
    title: 'Gym Workout',
    dueDate: '2023-12-28',
    priority: 'Low',
    checklist: ['Cardio', 'Weights', 'Stretching'],
    isComplete: false,
    note: 'Focus on leg exercises today.',
    createDate: new Date().toDateString(),
};

const randomData10 = {
    title: 'Book Flight Tickets',
    dueDate: '2024-01-15',
    priority: 'High',
    checklist: ['Check passport', 'Choose seats', 'Confirm dates'],
    isComplete: false,
    note: 'Check for any travel restrictions due to COVID-19.',
    createDate: new Date().toDateString(),
};

const todoArray = [new Todo(randomData1), new Todo(randomData2), new Todo(randomData3), new Todo(randomData10)];


let defaultProjects = [new Project({title: 'Today', type: 'default'}), new Project({title: 'Important', type: 'default'}), 
                    new Project({title: 'Completed', type: 'default'}), new Project({title: 'Tasks', todoList: todoArray, type: 'default'})];

export default defaultProjects;