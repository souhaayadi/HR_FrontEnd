import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {ProfilesComponent} from '../../components/ManageEmployee/profiles/profiles.component';

import {AuthGuard} from '../../authGuard.service';
import {AddEmployeeComponent} from '../../components/ManageEmployee/add-employee/add-employee.component';
import {ManageEmployeeComponent} from '../../components/ManageEmployee/manage-employees/manage-employee.component';
import {DemandeConge} from '../../components/demandeCongé/demande-model';
import {CreationDemandeComponent} from '../../components/demandeCongé/creationDemande/creation-demande.component';
import {DemandeComponent} from '../../components/demandeCongé/Demande/demande.component';
import {StatusComponent} from '../../components/demandeCongé/statusconge/status.component';
import {FichePaieComponent} from '../../components/Paie/fichePaie/fiche-paie.component';
import {DownloadPaieComponent} from '../../components/Paie/downloadPaie/download-paie.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent,canActivate: [AuthGuard] },
  { path: 'user-profile/:id',   component: UserProfileComponent,canActivate: [AuthGuard] },
    { path: 'tables',         component: TablesComponent,canActivate: [AuthGuard] },
    { path: 'icons',          component: IconsComponent ,canActivate: [AuthGuard]},
    { path: 'maps',           component: MapsComponent ,canActivate: [AuthGuard]},
    { path: 'addEmployee',           component:AddEmployeeComponent ,canActivate: [AuthGuard] },
    { path: 'addEmployee/:id',           component:AddEmployeeComponent,canActivate: [AuthGuard]  },
    { path: 'manageEmployees',           component:ManageEmployeeComponent ,canActivate: [AuthGuard] },
  { path: 'profiles',           component:ProfilesComponent,canActivate: [AuthGuard]  },
  { path: 'demandeConge',           component:CreationDemandeComponent,canActivate: [AuthGuard]  },
  { path: 'demande',           component:DemandeComponent,canActivate: [AuthGuard]  },
  { path: 'status',           component:StatusComponent,canActivate: [AuthGuard]  },
  { path: 'paie',           component:FichePaieComponent,canActivate: [AuthGuard]  },
  { path: 'paie/:id',           component:FichePaieComponent,canActivate: [AuthGuard]  },
  { path: 'downloadpaie',           component:DownloadPaieComponent,canActivate: [AuthGuard]  },











];
