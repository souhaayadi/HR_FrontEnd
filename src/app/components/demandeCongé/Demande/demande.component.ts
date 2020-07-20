import {Component, OnInit} from '@angular/core';
import {DemandeService} from '../demande.service';
import {EmployeeService} from '../../ManageEmployee/employee.service';
import {Adresse, Diplome, ElementPaie, Employee, Fonction, Service} from '../../ManageEmployee/employee-model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {
  listConges:any[]=[]
  constructor(private toastr: ToastrService,private demandeService:DemandeService,private employeeService:EmployeeService) {
  }
  employee: Employee ={
    address:{} as Adresse,
    fonction:{} as Fonction,
    service:{} as Service,
    diplome:{} as Diplome,
    elementPaie:{} as ElementPaie
  } as Employee;
  ngOnInit(): void {
    this.getCongesList();
  }
  getCongesList(){
    let fonction=localStorage.getItem('fonction')
    if(fonction=='admin'){
      this.demandeService.getCongés().subscribe(response=>{
        this.listConges=response.filter(item=>item.status=='waitingForRH');
      })
    }else{
      this.demandeService.getCongés().subscribe(response=>{
        this.listConges=response.filter(item=>item.status=='waitingForManager');
      })
    }

  }
  acceptDemande(event:any,conge:any,status:any){
    let fonction=localStorage.getItem('fonction')
    if(fonction=='admin'){
      conge.status='accepted'
      conge.status='waitingForRH'
      this.employeeService.getEmployeeByName(conge.nomEmployee,0,5).subscribe(response=>{
        response.content.forEach(elem=>{
          this.employee=elem;
          this.employee.demandeConge.status=conge.status;
          this.employeeService.updateEmployee(this.employee).subscribe(data => {
            if(data) {
              this.toastr.success('operation success', '');

              this.employee = data;
            }
          }, error => {
            this.toastr.error('operation failed', '');
            console.log(error);
          });
        });
      })
      this.getCongesList()
    }
    else{
      conge.status='waitingForRH'
      this.employeeService.getEmployeeByName(conge.nomEmployee,0,5).subscribe(response=>{
        response.content.forEach(elem=>{
          this.employee=elem;
          this.employee.demandeConge.status=conge.status;
          this.employeeService.updateEmployee(this.employee).subscribe(data => {
            if(data) {
              this.toastr.success('operation success', '');

              this.employee = data;
            }
          }, error => {
            this.toastr.error('operation failed', '');
            console.log(error);
          });
        });
      })
      this.getCongesList()
    }

  }
  refuseDemande(event:any,conge:any,status:any){
    let fonction=localStorage.getItem('fonction')
    if(fonction=='admin'){
      conge.status='refused'
      conge.status='waitingForRH'
      this.employeeService.getEmployeeByName(conge.nomEmployee,0,5).subscribe(response=>{
        response.content.forEach(elem=>{
          this.employee=elem;
          this.employee.demandeConge.status=conge.status;
          this.employeeService.updateEmployee(this.employee).subscribe(data => {
            if(data) {
              this.toastr.success('operation success', '');

              this.employee = data;
            }
          }, error => {
            this.toastr.error('operation failed', '');
            console.log(error);
          });
        });
      })
      this.getCongesList()
    }
    else {


      conge.status = 'refused'
      this.employeeService.getEmployeeByName(conge.nomEmployee, 0, 5).subscribe(response => {
        response.content.forEach(elem => {
          this.employee = elem;
          this.employee.demandeConge.status = conge.status;
          this.employeeService.updateEmployee(this.employee).subscribe(data => {
            if (data) {
              this.toastr.success('operation success', '');

              this.employee = data;
            }
          }, error => {
            this.toastr.error('operation failed', '');
            console.log(error);
          });
        });
      })
      this.getCongesList()
    }
  }



}
