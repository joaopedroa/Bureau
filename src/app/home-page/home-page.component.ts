import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { uiState } from '../../environments/uicontext';
import { AuthContext } from '../../environments/authcontext';
import { AuthServicesService } from '../_services/auth-services.service';
import { Input } from '@angular/core/src/metadata/directives';
import { HttpUtilsService } from '../_services/http-utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  subAfterLogout: any;
  subAfterLogin: any;
  title = 'Template Base 01';
  currentRate = 0;
  urlGet = 'https://jsonplaceholder.typicode.com/comments';
  urlPost = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private authServicesService: AuthServicesService, private httpUtilsService: HttpUtilsService,
    private router: Router) {
    this.subAfterLogin = this.authServicesService.AfterLogin.subscribe(data => {
      uiState.inTransaction = false;
    });

    this.subAfterLogout = this.authServicesService.AfterLogout.subscribe(data => {
      uiState.inTransaction = false;
      this.router.navigateByUrl('\login');
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subAfterLogin.unsubscribe();
    this.subAfterLogout.unsubscribe();
  }

  toggleLogin() {
    uiState.inTransaction = true;
    if (AuthContext.isLogged) {
      this.authServicesService.logout();
    } else {
      this.authServicesService.loginWithEmailPassword('teste@teste.com.br', 'senha1234');
    }
  }

  evocaGet() {
    uiState.inTransaction = true;
    const r = this.httpUtilsService.get(this.urlGet, '').then(data => {
      console.log(data);
      uiState.inTransaction = false;
    }).catch(err => {
      uiState.inTransaction = false;
    });
  }

  evocaPost() {
    uiState.inTransaction = true;
    const dataPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const r = this.httpUtilsService.post(this.urlPost, dataPost, '').then(data => {
      console.log(data);
      uiState.inTransaction = false;
    }).catch(err => {
      uiState.inTransaction = false;
    });
  }


}
