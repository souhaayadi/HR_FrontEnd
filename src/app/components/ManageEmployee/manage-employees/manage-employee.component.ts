
import {Component, OnInit, ViewChild} from '@angular/core';

import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {EmployeeService} from '../employee.service';
import {AddEmployeeComponent} from '../add-employee/add-employee.component';
import {Employee} from '../employee-model';

@Component({
  selector: 'manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {

  constructor(private toastr: ToastrService, public employeeService: EmployeeService, private router: Router) {
  }
  employeesList:Employee[]=[];
  @ViewChild(AddEmployeeComponent) addEmployeeComponent:AddEmployeeComponent ;
  sexelist:any[]=[]
  ngOnInit() {

    this.sexelist.push({label: "Men", value: "Men"});
    this.sexelist.push({label: "Women", value: "Women"});
    this.getEmployees();
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(response=>{
      this.employeesList=response;
    })
  }

  searchIconClick(employee:Employee){
    this.router.navigate(['/user-profile/ '+ employee.code]);
  }
  editIconClick(employee:Employee){

    this.router.navigate(['/addEmployee/ '+ employee.code]);
  }

  deleteIconClick(employee:Employee){
   this.employeeService.deleteEmployee(employee.code).subscribe(response=>{
  if(response){
 /* employee.comptes.forEach(compte=>{
    this.accountsService.deleteAccount(compte.codeCompte).subscribe(resp=>{

    })
  })*/
  this.getEmployees();
    this.toastr.success('operation success', '');
  }
  }, error => {
  this.toastr.error('operation failed', '');
  console.log(error);
});
  }
}
