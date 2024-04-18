import {Routes } from '@angular/router';
import { InviteCodeAuthComponent } from './components/invite-code-auth/invite-code-auth.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CanActivate } from './auth.guard';

export const routes: Routes = [
    { 
        path: 'login',
        component: InviteCodeAuthComponent,
        title: 'AB.Portfolio' 
    },
    { 
        path: 'portfolio', 
        component: LayoutComponent,
        canActivate: [CanActivate],
        title: 'AB.Portfolio' 
    },
    { 
        path: '', 
        redirectTo: '/portfolio', 
        pathMatch: 'full' 
    },
];