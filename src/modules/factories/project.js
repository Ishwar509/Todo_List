
class Project {
    constructor(title = '', todoList = [], type = 'user'){
        this.title = title;
        this.todoList = todoList;
        this.type = type;
    }

    addTodo(todo){
        this.todoList.push(todo);
    }

    removeTodo(todo){
        this.todoList =  this.todoList.filter((curr) => {curr !== todo});
    }
};

export default Project;