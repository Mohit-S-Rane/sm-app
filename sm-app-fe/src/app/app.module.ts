import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientMasterComponent } from './components/client-master/client-master.component';
import { CustomerMasterComponent } from './components/customer-master/customer-master.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApiService } from './services/api-service';
import { AlertService } from './services/alert-service';
import { HttpService } from './services/http-service';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AnonGuard } from './guards/anon.guards';
import { AuthGuard } from './guards/auth.guards';
import { EditClientDataComponent } from './components/edit-client-data/edit-client-data.component';
import { EditCustomerDataComponent } from './components/edit-customer-data/edit-customer-data.component';
import { ClientLoginComponent } from './components/client-login/client-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClientMasterComponent,
    CustomerMasterComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    EditClientDataComponent,
    EditCustomerDataComponent,
    ClientLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressBarModule,
    FormsModule,
    MatTableModule,
    FlexLayoutModule,
    MatSidenavModule
  ],
  providers: [ ApiService, AuthService, ClientService, CustomerService, AlertService, HttpService, AnonGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
