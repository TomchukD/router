import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { LayoutComponent } from 'src/app/application/layout/layout.component';
import { SettingComponent } from 'src/app/application/setting/setting.component';
import { DashboardComponent } from 'src/app/application/dashboard/dashboard.component';
import { authGuard } from 'src/app/auth/login/auth.guard';
import { CreateUserComponent } from 'src/app/auth/create-user/create-user.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'reg',
        component: CreateUserComponent
    },
    {
        path: 'app',
        // canActivate: [authGuard],
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'setting',
                component: SettingComponent
            },{
                path: 'setting/:token',
                component: SettingComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },

];
