
import {Adresse, Diplome, Employee, Fonction, Service} from '../employee-model';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  private subscription: Subscription;

  constructor(private toastr: ToastrService, public employeeService: EmployeeService , private activatedRoute:ActivatedRoute ) { }
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

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params: any) => {
      this.employeeId = params['id'];
      if(this.employeeId) {
        this.employeeService.getEmployee(this.employeeId).subscribe(response => {
          this.employee = response
          this.employee.dateNaiss= new Date(this.employee.dateNaiss)
          this.employee.dateEntree= new Date(this.employee.dateEntree)
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
  saveEmployee(event:any) {
    this.employee.soldeConge=0;
    this.employee.droitAnnuel=22;

    this.employeeService.saveEmployee(this.employee).subscribe(data => {
       if(data) {
         this.toastr.success('operation success', '');

       }
    }, error => {
      this.toastr.error('operation failed', '');
      console.log(error);
    });
  }
  changeSexe(event:any){
   this.sexe=event.value;
  }
  editEmployee(){


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

}
