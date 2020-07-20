import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../ManageEmployee/employee.service';
import {Adresse, Diplome, Employee, Fonction, Service} from '../../ManageEmployee/employee-model';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(private employeeService:EmployeeService) {
  }
  employee: Employee ={
    address:{} as Adresse,
    fonction:{} as Fonction,
    service:{} as Service,
    diplome:{} as Diplome,
  } as Employee;
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(){
    let nom=localStorage.getItem('user');

    this.employeeService.getEmployeeByName(nom,0,5).subscribe(response=>{
      response.content.forEach(elem=>{
        this.employee=elem;
        localStorage.setItem('fonction', elem.fonction.nom);
      });
    })
  }
  getStatus(status:any){
    console.log(status)
    let result='';
    if(status=='waitingForManager'){
      result='en attente de la validation de manager'
    }
    if(status=='waitingForRH'){
      result='en attente de la validation de RH'
    }
    if(status=='accepted'){
      result='demande acceptée'
    }
    if(status=='refused'){
      result='demande refusée'
    }
    return result;
  }
}
