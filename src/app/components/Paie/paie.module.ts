

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {CalendarModule, ChartModule, CheckboxModule, DropdownModule, SelectButtonModule, TableModule} from 'primeng';


import {FichePaieComponent} from './fichePaie/fiche-paie.component';
import {PaieService} from './paie.service';
import {DownloadPaieComponent} from './downloadPaie/download-paie.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    DropdownModule,
    FormsModule,DropdownModule, CalendarModule , ReactiveFormsModule, CheckboxModule, SelectButtonModule,ChartModule,TableModule,
  ],
  declarations: [

    FichePaieComponent,DownloadPaieComponent

  ],
  exports: [
    FichePaieComponent,DownloadPaieComponent
  ],
  providers:[PaieService]
})
export class PaieModule { }
