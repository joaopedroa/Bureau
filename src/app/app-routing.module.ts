import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageDemoComponent } from './blank-page-demo/blank-page-demo.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PessoasPageComponent } from './pessoas-page/pessoas-page.component';
import { CommentPageDemoComponent } from './comment-page-demo/comment-page-demo.component';
import { CommentDetailPageDemoComponent } from './comment-detail-page-demo/comment-detail-page-demo.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  { path: 'users-detail', component: UsersDetailComponent, canActivate: [AuthGuard] },
  { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'grid-comment', component: CommentPageDemoComponent, canActivate: [AuthGuard] },
  { path: 'detail-comment', component: CommentDetailPageDemoComponent, canActivate: [AuthGuard] },
  { path: 'home-page', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'pessoas-page', component: PessoasPageComponent, canActivate: [AuthGuard] },
  { path: '', component: BlankPageDemoComponent, canActivate: [AuthGuard] },
  { path: 'blank-demo', component: BlankPageDemoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundPageComponent },
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
