export default class AuthService {
    
    static setToken(token) {
      localStorage.setItem('golden_token', token);
    }
  
    static getToken() {
      return localStorage.getItem('golden_token');
    }
  
    static isLoggedIn() {
      return !!localStorage.getItem('golden_token');
    }
  }
  