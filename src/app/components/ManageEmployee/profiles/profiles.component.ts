
import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import {Employee} from '../employee-model';

@Component({
  selector: 'profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  private openConnectDropDown: boolean=false;
  private openMsgDropDown: boolean=false;
  private codeClt: any;

  constructor(public employeeService: EmployeeService, private router: Router) {
  }
  listEmployees:Employee[]=[]
  public focus;
  test: Date = new Date();
  age:any;
  countCon:any=0;
  countMsg:any=0;
  ngOnInit() {
     this.getEmployees()

  }
  viewProfile(cltCode:any){
    this.router.navigate(['/user-profile/ '+ cltCode]);
  }
  search(event:any){
    this.employeeService.getEmployeeByName(event.target.value,0,5).subscribe(resp=>{
      this.listEmployees=resp.content;
    })
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(resp=>{
      this.listEmployees=resp;
      this.age=this.test.getFullYear();
      this.listEmployees.map(clt=>{
        let cltnaiss=new Date(clt.dateNaiss).getFullYear();
        clt.dateNaiss=2020-cltnaiss;
      })
    })
}
  openConnectdropDown(event:any,codeClt:any){
    this.codeClt=codeClt
    if((this.countCon %2) ==0){
      this.openConnectDropDown=true;

      this.countCon++;
    }
    else{
      this.openConnectDropDown=false;
      this.countCon=this.countCon+1;
    }

  }
  openMessgaedropDown(event:any,codeClt:any){
    this.codeClt=codeClt

    if((this.countMsg %2) ==0){
      this.openMsgDropDown=true;
      this.countMsg++;
    }
    else{
      this.openMsgDropDown=false;
      this.countMsg=this.countMsg+1;
    }
  }
}
