import httpUtils from '../utils/http';


export function fetchTodos(){
    return httpUtils.get('/todos');
}


export function addTodo(data){
    return httpUtils.post('/todos',data);
}