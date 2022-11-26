import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SessionModule } from './session/session.module';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/components/components.module';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    SessionModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
