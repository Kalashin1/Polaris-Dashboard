import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { JoinSuccessComponent } from './pages/join-success/join-success.component'
import { AuthGuard } from './guard/auth.guard'


const routes: Routes = [
  {
    path: '',
    redirectTo : 'Signup',
    pathMatch: 'full'
  },
  {
  	path: 'Signup',
    component: SignupComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Channels/:userId',
    component: ChannelListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'join-success/:userId',
    component: JoinSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'Signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
