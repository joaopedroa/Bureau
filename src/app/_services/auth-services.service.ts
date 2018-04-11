import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class AuthServicesService {
  @Output() AfterLogin: EventEmitter<any> = new EventEmitter();
  @Output() AfterLogout: EventEmitter<any> = new EventEmitter();

  constructor() { }

  loginWithEmailPassword(email, password) {
    if (email === 'teste@teste.com.br' && password === 'senha1234') {
      const data = {
        user: email,
        token: 'tZ7j9fm7TV'
      };
      window.localStorage.setItem('before', JSON.stringify(data));
      this.AfterLogin.emit(data);
    } else {
      throw new Error('Usuário/Senha inválidos');
    }
  }

  logout() {
    window.localStorage.removeItem('before');
    this.AfterLogout.emit(null);
  }

  isLogged() {
    const data = this.getUserData();
    return data !== null && data !== undefined;
  }

  private getUserData(): any {
    return JSON.parse(window.localStorage.getItem('before'));
  }
}
