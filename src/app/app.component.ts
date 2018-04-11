import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthContext } from '../environments/authcontext';
import { uiState } from '../environments/uicontext';
import { AuthServicesService } from './_services/auth-services.service';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  subLogin: any;
  subLogout: any;

  constructor(private authServicesService: AuthServicesService) {
  }

  ngOnInit(): void {
    AuthContext.isLogged = this.authServicesService.isLogged();

    this.subLogin = this.authServicesService.AfterLogin.subscribe( data => {
      this.setLogIn(data);
    });

    this.subLogout = this.authServicesService.AfterLogout.subscribe( data => {
      this.setLogOut(data);
    });

  }

  ngOnDestroy(): void {
    this.subLogin.unsubscribe();
    this.subLogout.unsubscribe();
  }

  isLogged() {
    return AuthContext.isLogged;
  }

  private setLogIn(data) {
    AuthContext.isLogged = true;
  }

  private setLogOut(data) {
    AuthContext.isLogged = false;
  }

  get inTransaction() {
    return uiState.inTransaction;
  }

}
