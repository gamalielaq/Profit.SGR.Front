import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterPositionComponent } from './form-register-position/form-register-position.component';
import { SessionComponent } from './session.component';
import { SessionRoutingModule } from './session.routing';

@NgModule({
  declarations: [
    SessionComponent,
    FormRegisterPositionComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
