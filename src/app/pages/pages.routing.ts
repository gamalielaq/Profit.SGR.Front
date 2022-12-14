import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildRoutsModule } from './child-routs.module';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'Web-SGR', pathMatch: 'full' },
  {
    path: '', component: PagesComponent,
    // canActivate: [ AuthGuard ],
    // canLoad: [ AuthGuard ],
    loadChildren: () => import('./child-routs.module').then(m => m.ChildRoutsModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
