const initialState = {
  todos: [],
  filter: 'all'
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        todos: action.payload.todos
      };
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        todos: [action.payload.todo, ...state.todos]
      };
    case 'UPDATE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.payload.todo.id ? action.payload.todo : todo
        )
      };
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.todoId)
      };
    case 'SET_TODO_FILTER':
      return {
        ...state,
        filter: action.payload.filter
      };
    default:
      return state;
  }
}