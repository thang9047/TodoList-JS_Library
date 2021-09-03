import storage from "./ultil/storage.js";
const init = {
  todos: storage.get(),
  filter: 'all',
  filters: {
    all: () => true,
    active: todo => !todo.complete,
    complete: todo => todo.complete,
  },
  editIndex: null
};

const actions = {
  add({ todos }, title) {
    if(title){
      todos.push({title, complete: false})
      storage.set(todos)
    }
  },
  toggle({todos}, index) {
    const todo = todos[index]
    todo.complete = !todo.complete
    storage.set(todos)
  },
  toggleAll ( {todos}, complete) {
    todos.forEach(todo => todo.complete = complete)
    storage.set(todos)
  },
  delete ({todos}, index) {
    todos.splice(index, 1)
    storage.set(todos)
  },
  switchFilter (state, filter) {
    state.filter = filter
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active)
    storage.set(state.todos)
  },
  onEdit(state, index) {
    state.editIndex = index
  },
  onSave(state, title) {
    if(state.editIndex !== null) {
      if(title) {
        state.todos[state.editIndex].title = title
        storage.set(state.todos)
      }
      else {
        this.delete(state, state.editIndex)
      }
      state.editIndex = null
    }
  },
  cancelEdit(state) {
      state.editIndex = null
    }
}

export default function reducer(state = init, action, args) {
  // switch (action) {
  //   case 'add':
  //     const [title]= args
  //     return {
  //       ...state,
  //       todos: [...state.todos, {
  //         title, 
  //         complete: false
  //       }]
  //     }
  //   default:
  //     return state;
  // }
  actions[action] && actions[action](state, ...args)
  return state
}
