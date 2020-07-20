import {Component, OnInit} from '@angular/core';
import {DemandeConge} from '../demande-model';
import {EmployeeService} from '../../ManageEmployee/employee.service';
import {Adresse, Diplome, ElementPaie, Employee, Fonction, Service} from '../../ManageEmployee/employee-model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'creation-demande',
  templateUrl: './creation-demande.component.html',
  styleUrls: ['./creation-demande.component.scss']
})
export class CreationDemandeComponent implements OnInit {
  demande:DemandeConge ={} as DemandeConge;
  typeList:any[]=[];
  listManager:any[]=[];
  employee: Employee ={
    address:{} as Adresse,
    fonction:{} as Fonction,
    service:{} as Service,
    diplome:{} as Diplome,
    elementPaie:{} as ElementPaie
  } as Employee;
  constructor(private employeeService : EmployeeService,private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.typeList.push({label: "payé", value: "payé"});
    this.typeList.push({label: "sans solde", value: "sans solde"});
    this.typeList.push({label: "annuel", value: "annuel"});
    this.typeList.push({label: "maladie", value: "maladie"});
    this.getEmployee();
    this.getAllEmployees();
  }
  saveDemande(event:any){
    this.demande.status='waitingForManager'
    this.demande.nomEmployee=this.employee.nom
    this.employee.demandeConge=this.demande;
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      if(data) {
        this.toastr.success('operation success', '');

        this.employee = data;
      }
    }, error => {
      this.toastr.error('operation failed', '');
      console.log(error);
    });
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
  getAllEmployees(){
    this.employeeService.getEmployees().subscribe(response=>{
      let employees=response.filter(item => item.fonction.nom =='manager');
      employees.forEach(emp=>{
        this.listManager.push({label: emp.nom, value: emp.nom});
      })
    })
  }
}
