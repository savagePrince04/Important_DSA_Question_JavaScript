let todoApp = {
    todos: [],
    count: 1,
    addTask(task){
        if(!task){
        console.log("Please add valid task!");
        return;
        }
        this.todos.push({id: this.count, text: task, done: false});
        console.log("Task"+this.count, "added");
        this.count++;
        },
        deleteTask(id) {
        if(this.todos.length == 0){
        console.log("No tasks available. Please add task first!");
        return;
        }
        let todosLength = this.todos.length;
        this.todos = this.todos.filter(x => x.id != id );
        if(this.todos.length == todosLength){
        console.log("Please pass valid task id");
        return;
        }
        console.log("Task"+id, "deleted");
        },
        updateTaskText(id, text) {
        if(this.todos.length == 0){
        console.log("No tasks available. Please add task first!");
        return;
        }
        let task = this.todos.find(x => x.id == id);
        if(!task){
        console.log("Please pass valid task id");
        }
        task.text = text;
        console.log("Task"+id, "updated");
        console.log("Id:", task.id, "text:", task.text, "isDone:", task.done);
        },
        updateTaskAsDone(id) {
        if(this.todos.length == 0){
        console.log("No tasks available. Please add task first!");
        return
        }
        let task = this.todos.find(x => x.id == id);
if(!task){
console.log("Please pass valid task id");
}
task.done = true;
console.log("Task"+id, " marked as done!");
},
getAllTasks() {
if(this.todos.length == 0){
console.log("No tasks added!");
return;
}
for(let task of this.todos){
console.log("Id:", task.id, "text:", task.text, "isDone:", task.done)
}
}
}