import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { EdidelscrenComponent } from './edidelscren/edidelscren.component';
import { ViewscrenComponent } from './viewscren/viewscren.component';
import { CreatescrenComponent } from './createscren/createscren.component';
import { SearchscrenComponent } from './searchscren/searchscren.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'edidelscren', loadChildren: () => import('./edidelscren/edidelscren.module').then(mod => mod.EdidelscrenModule)},
  { path: '', component: TemplateComponent , pathMatch: 'full' },
{ path: 'viewscren', loadChildren: () => import('./viewscren/viewscren.module').then(mod => mod.ViewscrenModule)},
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
{ path: 'createscren', loadChildren: () => import('./createscren/createscren.module').then(mod => mod.CreatescrenModule)},

{ path: 'searchscren', loadChildren: () => import('./searchscren/searchscren.module').then(mod => mod.SearchscrenModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
