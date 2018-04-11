import { Component, OnInit, OnDestroy } from '@angular/core';
import { uiState } from '../../environments/uicontext';
import { AuthContext } from '../../environments/authcontext';
import { AuthServicesService } from '../_services/auth-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  return = '';
  subAfterLogin: any;
  subAfterLogout: any;

  constructor(private authServicesService: AuthServicesService, private router: Router,
    private route: ActivatedRoute) {
      this.subAfterLogin = this.authServicesService.AfterLogin.subscribe(data => {
        uiState.inTransaction = false;
        this.navToColler();
      });

      this.subAfterLogout = this.authServicesService.AfterLogout.subscribe(data => {
        uiState.inTransaction = false;
      });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.return = params['return'] || '/');
  }

  ngOnDestroy(): void {
    this.subAfterLogin.unsubscribe();
    this.subAfterLogout.unsubscribe();
  }

  private navToColler() {
    this.router.navigateByUrl(this.return);
  }

  toggleLogin() {
    uiState.inTransaction = true;
    if (AuthContext.isLogged) {
      this.authServicesService.logout();
    } else {
      this.authServicesService.loginWithEmailPassword('teste@teste.com.br', 'senha1234');
    }
  }

}
