
import {ProfilesComponent} from './profiles/profiles.component';
import {EmployeeService} from './employee.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {CalendarModule, ChartModule, CheckboxModule, DropdownModule, SelectButtonModule, TableModule} from 'primeng';
import {ManageEmployeeComponent} from './manage-employees/manage-employee.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DropdownModule,
    FormsModule,DropdownModule, CalendarModule , ReactiveFormsModule, CheckboxModule, SelectButtonModule,ChartModule,TableModule
  ],
  declarations: [
    AddEmployeeComponent,
    ManageEmployeeComponent,
    ProfilesComponent
  ],
  exports: [
    AddEmployeeComponent,ManageEmployeeComponent
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
