import {
  // makeObservable,
  // observable,
  // action,
  // computed,
  reaction,
  toJS,
  makeAutoObservable,
} from "mobx";

export default class store {
  todos = [];
  name = "";

  constructor() {
    // makeObservable(this, {
    //   todos: observable,
    //   name: observable,
    //   countOfCompleted: computed,
    //   addTodo: action,
    //   completeTodo: action,
    // });

    makeAutoObservable(this, {}, { autoBind: true });

    reaction(
      () => this.todos.length,
      () => {
        console.log("send todos to server: ", toJS(this.todos));
      }
    );
  }

  get countOfCompleted() {
    return this.todos.filter((todo) => todo.completed).length;
  }

  completeTodo(id) {
    const todo = this.todos.find((item) => item.id === id);
    todo.completed = true;
  }

  addTodo(task) {
    this.todos.push({
      title: task,
      completed: false,
      id: Date.now(),
    });
  }
}
