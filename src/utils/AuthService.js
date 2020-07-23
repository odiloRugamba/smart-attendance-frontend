export default class AuthService {
    
    static setToken(token) {
      localStorage.setItem('smartgate_token', token);
    }
  
    static getToken() {
      return localStorage.getItem('smartgate_token');
    }
  
    static isLoggedIn() {
      return !!localStorage.getItem('smartgate_token');
    }
  }
  