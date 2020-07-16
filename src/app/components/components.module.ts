import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {EmployeeModule} from './ManageEmployee/employee.module';
import {DemandeModule} from './demandeCongé/demande.module';
import {PaieModule} from './Paie/paie.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    EmployeeModule, DemandeModule,PaieModule

  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
