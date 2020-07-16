

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {CalendarModule, ChartModule, CheckboxModule, DropdownModule, SelectButtonModule, TableModule} from 'primeng';

import {CreationDemandeComponent} from './creationDemande/creation-demande.component';
import {DemandeService} from './demande.service';
import {DemandeComponent} from './Demande/demande.component';
import {StatusComponent} from './statusconge/status.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DropdownModule,
    FormsModule,DropdownModule, CalendarModule , ReactiveFormsModule, CheckboxModule, SelectButtonModule,ChartModule,TableModule
  ],
  declarations: [

    CreationDemandeComponent,DemandeComponent,StatusComponent

  ],
  exports: [
    CreationDemandeComponent,DemandeComponent,StatusComponent
  ],
  providers:[DemandeService]
})
export class DemandeModule { }
