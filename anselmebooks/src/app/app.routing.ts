import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '',                     component: ComponentsComponent },
    { path: 'Livros',               component: ComponentsComponent },
    { path: 'Clientes',             component: ComponentsComponent },
    { path: 'Compras',              component: ComponentsComponent },

    { path: 'Livraria',             component: ComponentsComponent },
    { path: 'Leitores',             component: ComponentsComponent },
    { path: 'login',                component: LoginComponent },
    
    // { path: 'index',                },
    // { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/landing',     component: LandingComponent },
    
    // { path: 'examples/profile',     component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
