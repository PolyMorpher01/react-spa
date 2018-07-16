import httpUtils from '../utils/http';

export function loginUser(data) {
  return httpUtils.post('/auth/login', data);
}

export function logout() {
  const authTokenHeaders = {
    headers: {
      Authorization: localStorage.accessToken
    }
  };
  let data = {};
  data.token = localStorage.refreshToken;
  return httpUtils.post('/auth/logout', data, authTokenHeaders);
}
