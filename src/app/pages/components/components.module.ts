import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { DivisaComponent } from './divisa/divisa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

const components = [
  AsideComponent,
  DivisaComponent,
  PageNotFoundComponent,
  SidebarComponent,
  HeaderComponent
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
