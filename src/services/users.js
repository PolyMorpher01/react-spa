import httpUtils from '../utils/http';

export function register(data){
    return httpUtils.post('/users',data);
}