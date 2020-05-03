import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLogService } from './user-log.service';
import { AuthguardGuard } from './authguard.guard';

const appRoutes:Routes = [
  {
    path:"",
    component:LoginComponent

  },
  {
    path: 'dashboard',
    canActivate:[AuthguardGuard],
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserLogService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
