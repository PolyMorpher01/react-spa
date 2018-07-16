import httpUtils from '../utils/http';

export function fetchTodos() {
  console.log('fetchall');
  return httpUtils.get('/todos');
}

export function fetchById(id) {
  return httpUtils.get('/todos/' + id);
}

export function addTodo(data) {
  return httpUtils.post('/todos', data);
}

export function updateTodo(data, id) {
  return httpUtils.put('/todos/' + id, data);
}

export function deleteTodo(id) {
  return httpUtils.delete('/todos/' + id);
}
