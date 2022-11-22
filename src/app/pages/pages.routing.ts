import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        // loadChildren: () => import('./../views/home/dashboard.module').then((m) => m.DashboardModule),
      }
    ],
  },
  {
    path: 'session',
    component: SessionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class PagesRoutingModule { }
