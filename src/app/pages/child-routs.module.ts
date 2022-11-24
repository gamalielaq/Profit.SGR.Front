import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';

const childRouts: Routes = [
  { path: 'Web-SGR', component: HomeComponent },
  {
    path: 'session', component: SessionComponent,
    // loadChildren: () => import('./child-routs.module').then(m => m.ChildRoutsModule)
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(childRouts)
  ],
  exports: [RouterModule]
})
export class ChildRoutsModule { }
