import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRegisterPositionComponent } from './form-register-position/form-register-position.component';

const routes: Routes = [
    {
        path: '',
        component: FormRegisterPositionComponent,
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class SessionRoutingModule { }