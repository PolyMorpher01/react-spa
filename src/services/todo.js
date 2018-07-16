import httpUtils from '../utils/http';

export function fetchTodos() {
  const authTokenHeaders = {
    headers: {
      Authorization: localStorage.accessToken
    }
  };

  return httpUtils.get('/todos', authTokenHeaders);
}

export function fetchById(id) {
  const authTokenHeaders = {
    headers: {
      Authorization: localStorage.accessToken
    }
  };
  return httpUtils.get('/todos/' + id, authTokenHeaders);
}

export function addTodo(data) {
  const authTokenHeaders = {
    headers: {
      Authorization: localStorage.accessToken
    }
  };
  return httpUtils.post('/todos', data, authTokenHeaders);
}

export function updateTodo(data, id) {
  const authTokenHeaders = {
    headers: {
      Authorization: localStorage.accessToken
    }
  };
  return httpUtils.put('/todos/' + id, data, authTokenHeaders);
}

export function deleteTodo(id) {
  const authTokenHeaders = {
    headers: {
      Authorization: localStorage.accessToken
    }
  };
  return httpUtils.delete('/todos/' + id, authTokenHeaders);
}
