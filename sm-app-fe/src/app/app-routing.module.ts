import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientMasterComponent } from './components/client-master/client-master.component';
import { CustomerMasterComponent } from './components/customer-master/customer-master.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SignupComponent } from './components/signup/signup.component';
import { AnonGuard } from './guards/anon.guards';
import { AuthGuard } from './guards/auth.guards';
import { HeaderComponent } from './components/header/header.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';

const routes: Routes = [
  {
    path: '', canActivate: [AnonGuard],
    children: [{ path: 'signup', component: SignupComponent },
    { path: '', component: LoginComponent },
    { path: 'client-login', component: ClientLoginComponent },]
  },

  {
    path: '', canActivate: [AuthGuard],
    children: [{
      path: 'dashboard', component: DashboardComponent,
      children: [{ path: 'client-master', component: ClientMasterComponent },
      { path: 'customer-master', component: CustomerMasterComponent },
      ]
    },
    ]
  },

  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
