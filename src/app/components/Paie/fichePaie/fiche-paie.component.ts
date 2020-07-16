import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../ManageEmployee/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fiche-paie',
  templateUrl: './fiche-paie.component.html',
  styleUrls: ['./fiche-paie.component.scss']
})
export class FichePaieComponent implements OnInit {
  constructor(private employeeService:EmployeeService,private router:Router) {

  }
  listEmployees:any[]=[]
  user:any
  fonction:any
ngOnInit(): void {
    this.user=localStorage.getItem('user');
    this.fonction=localStorage.getItem('fonction');
    this.getEmployees();
}
  getEmployees(){
    this.employeeService.getEmployees().subscribe(resp=> {
      this.listEmployees = resp;
    })
  }
  selectEmployee(event:any,employeeName:any){
    this.router.navigate(['/paie/ '+ employeeName]);
  }
}
