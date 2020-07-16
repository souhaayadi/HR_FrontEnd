import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {EmployeeService} from '../../components/ManageEmployee/employee.service';
import {Adresse, Diplome, Employee, Fonction, Service} from '../../components/ManageEmployee/employee-model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private subscription: Subscription;


  constructor(public employeeService: EmployeeService, private activatedRoute:ActivatedRoute) { }

  sexelist:any[]=[]
  situationFamilialeList:any[]=[]
  fonctionList:any[]=[]
  serviceList:any[]=[]
  sexe:string;
  employeeId:any;

  employee: Employee ={
    address:{} as Adresse,
    fonction:{} as Fonction,
    service:{} as Service,
    diplome:{} as Diplome
  } as Employee;
  mode = 1;

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: any) => {
      this.employeeId = params['id'];
      if(this.employeeId){
        this.employeeService.getEmployee(this.employeeId).subscribe(response=>{

          this.employee=response
          console.log(this.employee)
        })
      }

    });
    this.sexelist.push({label: "Men", value: "Men"});
    this.sexelist.push({label: "Women", value: "Women"});
    this.situationFamilialeList.push({label: "Marié", value: "Marié"});
    this.situationFamilialeList.push({label: "Divorcé", value: "Divorcé"});
    this.situationFamilialeList.push({label: "Célibataire", value: "Célibataire"});
    this.fonctionList.push({label: "manager", value: "manager"});
    this.fonctionList.push({label: "cadre", value: "cadre"});
    this.fonctionList.push({label: "agent", value: "agent"});
    this.fonctionList.push({label: "assistant", value: "assitant"});
    this.fonctionList.push({label: "directeur", value: "directeur"});
    this.serviceList.push({label: "service RH", value: "serviceRH"});
    this.serviceList.push({label: "departement dev", value: "departement dev"});
    this.serviceList.push({label: "direction génarale", value: "direction génarale"});


  }
}
