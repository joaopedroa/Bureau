import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BlankPageDemoComponent } from './blank-page-demo/blank-page-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AuthServicesService } from './_services/auth-services.service';
import { HkLoadingSpinnerComponent } from './hk-loading-spinner/hk-loading-spinner.component';
import { HttpModule } from '@angular/http';
import { HttpUtilsService } from './_services/http-utils.service';
import { PessoasPageComponent } from './pessoas-page/pessoas-page.component';
import { PessoaService } from './_providers/pessoa.service';
import { HkDataGridComponent } from './hk-data-grid/hk-data-grid.component';
import { CommentPageDemoComponent } from './comment-page-demo/comment-page-demo.component';
import { HkDataFormComponent } from './hk-data-form/hk-data-form.component';
import { CommentDetailPageDemoComponent } from './comment-detail-page-demo/comment-detail-page-demo.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserServiceService } from './_providers/user-service.service';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { HkBlankFormComponent } from './hk-blank-form/hk-blank-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankPageDemoComponent,
    HomePageComponent,
    NotFoundPageComponent,
    SideMenuComponent,
    HkLoadingSpinnerComponent,
    PessoasPageComponent,
    HkDataGridComponent,
    CommentPageDemoComponent,
    HkDataFormComponent,
    CommentDetailPageDemoComponent,
    UsersListComponent,
    UsersDetailComponent,
    LoginComponent,
    HkBlankFormComponent
    ],
  imports: [
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthServicesService,
    HttpUtilsService,
    PessoaService,
    UserServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
