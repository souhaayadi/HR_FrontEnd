import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    typeRoute?: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '',typeRoute: 'dashboard' },
    { path: '/manageEmployees', title: 'Gestion des employés',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'manageEmployees'} ,
   { path: '/addEmployee', title: 'Ajouter un employé',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: ''} ,
  { path: '/demandeConge', title: 'Demande de congé',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'demandeConge'},

  { path: '/demande', title: 'Mes demandes',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'demande'},
  { path: '/status', title: 'status des congés',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'status'},
  { path: '/paie', title: 'Paie',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'paie'},
  { path: '/downloadpaie', title: 'Télécharger mes fiches de paie',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'downloadpaie'},

/*  { path: '/manageAccounts', title: 'View Accounts ',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: ''} ,*/
   /* { path: '/operations', title: 'Operations',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'operations'} ,*/
    { path: '/profiles', title: 'Profiles',  icon: 'ni-single-02 text-yellow', class: '', typeRoute: 'profiles'},


    { path: '/maps', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon: 'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon: 'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon: 'ni-circle-08 text-pink', class: '' }



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  openEmployeesSubMenu:boolean=false;
  openDemande:boolean=false;
  openAccountsSubMenu:boolean=false;
  private countClt: any=0;
  private countAcc: any=0;
  private countOp: any=0;
  user:any
  fonction:any
  @Output() menuType = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
    this.user=localStorage.getItem('user');
    this.fonction=localStorage.getItem('fonction');
  }
  clickManage(event:any,typeMenu:string){
    if(typeMenu=='clients'){
      if((this.countClt%2) ==0){
        this.openEmployeesSubMenu=true;
        this.countClt++;
      }
      else{
        this.openEmployeesSubMenu=false;
        this.countClt=this.countClt+1;
      }
    }

      if(typeMenu=='demande'){
        if((this.countOp %2) ==0){
          this.openDemande=true;
          this.countOp++;
        }
        else{
          this.openDemande=false;
          this.countOp=this.countAcc+1;
        }
      }

      if(typeMenu=='accounts'){
          if((this.countAcc %2) ==0){
            this.openAccountsSubMenu=true;
            this.countAcc++;
          }
          else{
            this.openAccountsSubMenu=false;
            this.countAcc=this.countAcc+1;
          }
        }


  }
  clickProfiles(event:any){
    this.menuType.emit("profiles");

  }

}
