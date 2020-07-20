import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../ManageEmployee/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Adresse, Diplome, ElementPaie, Employee, Fonction, Service} from '../../ManageEmployee/employee-model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'fiche-paie',
  templateUrl: './fiche-paie.component.html',
  styleUrls: ['./fiche-paie.component.scss']
})
export class FichePaieComponent implements OnInit {
  private subscription: Subscription;
  constructor(private toastr: ToastrService,private activatedRoute:ActivatedRoute,private employeeService:EmployeeService,private router:Router) {

  }
  employee: Employee ={
    address:{} as Adresse,
    fonction:{} as Fonction,
    service:{} as Service,
    diplome:{} as Diplome,
    elementPaie:{} as ElementPaie
  } as Employee;

  listEmployees:any[]=[]
  user:any
  fonction:any
  employeeName:any;
ngOnInit(): void {
    this.user=localStorage.getItem('user');
    this.fonction=localStorage.getItem('fonction');
    this.getEmployees();
  this.subscription = this.activatedRoute.params.subscribe((params: any) => {
    this.employeeName = params['name'];
    if(this.employeeName) {
      this.employeeService.getEmployeeByName(this.employeeName,0,5).subscribe(response => {
        this.employee = response;
        let paie : ElementPaie ={} as ElementPaie;
        this.employee.elementPaie=paie
      })
    }
  });
}

  getEmployees(){
    this.employeeService.getEmployees().subscribe(resp=> {
      this.listEmployees = resp;
    })
  }
  selectEmployee(event:any,employeeName:any){
    this.router.navigate(['/paie/ '+ employeeName]);
  }
  soumettre(event:any){
    this.employeeService.saveEmployee(this.employee).subscribe(data => {
      if(data) {
        this.toastr.success('operation success', '');

      }
    }, error => {
      this.toastr.error('operation failed', '');
      console.log(error);
    });
  }
}
