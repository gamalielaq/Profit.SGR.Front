import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { SharedComponentsModule } from '../shared/components/components.module';
import { DivisaComponent } from './components/divisa/divisa.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AsideComponent } from './components/aside/aside.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SessionRoutingModule } from './session/session.routing';
import { SessionModule } from './session/session.module';
import { ChildRoutsModule } from './child-routs.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    DivisaComponent,
    SidebarComponent,
    AsideComponent,
    PagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SessionModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PagesModule { }
