import { saveToLocalStorage, getFromLocalStorage } from '../../utils/storage';


const getUserTodos = (userId) => {
  const allTodos = getFromLocalStorage('todos') || [];
  return allTodos.filter(todo => todo.userId === userId);
};

const saveTodos = (todos) => {
  saveToLocalStorage('todos', todos);
};


export const fetchTodos = (userId) => async (dispatch) => {
  dispatch({ type: 'FETCH_TODOS_REQUEST' });
  
  try {
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const todos = getUserTodos(userId);
    dispatch({
      type: 'FETCH_TODOS_SUCCESS',
      payload: { todos },
    });
  } catch (error) {
    dispatch({
      type: 'TODOS_ERROR',
      payload: { error: error.message },
    });
  }
};


export const addTodo = (todoData) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_TODOS_REQUEST' });
  
  try {
    const { auth } = getState();
    if (!auth.user) throw new Error('Not authenticated');
    
    const newTodo = {
      id: Date.now(), 
      userId: auth.user.id,
      title: todoData.title,
      description: todoData.description || '',
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    const currentTodos = getFromLocalStorage('todos') || [];
    saveTodos([newTodo, ...currentTodos]);
    
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      payload: { todo: newTodo },
    });
  } catch (error) {
    dispatch({
      type: 'TODOS_ERROR',
      payload: { error: error.message },
    });
    throw error;
  }
};


export const updateTodo = (todoId, updates) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_TODOS_REQUEST' });
  
  try {
    const { auth } = getState();
    if (!auth.user) throw new Error('Not authenticated');
    
    const currentTodos = getFromLocalStorage('todos') || [];
    const todoIndex = currentTodos.findIndex(t => t.id === todoId);
    
    if (todoIndex === -1) throw new Error('Todo not found');
    if (currentTodos[todoIndex].userId !== auth.user.id) throw new Error('Unauthorized');
    
    const updatedTodo = {
      ...currentTodos[todoIndex],
      ...updates,
    };
    
    const updatedTodos = [...currentTodos];
    updatedTodos[todoIndex] = updatedTodo;
    
    saveTodos(updatedTodos);
    
    dispatch({
      type: 'UPDATE_TODO_SUCCESS',
      payload: { todo: updatedTodo },
    });
  } catch (error) {
    dispatch({
      type: 'TODOS_ERROR',
      payload: { error: error.message },
    });
    throw error;
  }
};

export const deleteTodo = (todoId) => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_TODOS_REQUEST' });
  
  try {
    const { auth } = getState();
    if (!auth.user) throw new Error('Not authenticated');
    
    const currentTodos = getFromLocalStorage('todos') || [];
    const todo = currentTodos.find(t => t.id === todoId);
    
    if (!todo) throw new Error('Todo not found');
    if (todo.userId !== auth.user.id) throw new Error('Unauthorized');
    
    const updatedTodos = currentTodos.filter(t => t.id !== todoId);
    saveTodos(updatedTodos);
    
    dispatch({
      type: 'DELETE_TODO_SUCCESS',
      payload: { todoId },
    });
  } catch (error) {
    dispatch({
      type: 'TODOS_ERROR',
      payload: { error: error.message },
    });
    throw error;
  }
};

export const setTodoFilter = (filter) => (dispatch) => {
  dispatch({
    type: 'SET_TODO_FILTER',
    payload: { filter },
  });
};