import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { SessionComponent } from './session/session.component';
import { SharedComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    SessionComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
