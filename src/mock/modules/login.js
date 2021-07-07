

export const login_api = {
  url: '/login',
  method: 'post',
  template: {
    code: 200,
    message: 'login success',
    data: {
      token: 'dXNlcm5hbWU9YWRtaW47'
    }
  }
};

export const logout_api = {
  url: '/logout',
  method: 'post',
  template: {
    code: 200,
    message: 'logout success'
  }
};