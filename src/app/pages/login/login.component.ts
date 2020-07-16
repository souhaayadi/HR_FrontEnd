import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';
import {User} from '../user.model';
import {EmployeeService} from '../../components/ManageEmployee/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private employeeService:EmployeeService,private router :Router,private loginService:LoginService) {}
  login:any;
  password:any;
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  register(event:any){
   this.router.navigate(['/register']);
  }
  signIn(event:any){
  this.loginService.validateCridentials(this.login,this.password).subscribe(response=>{

    if(response){
      localStorage.setItem('user', this.login);
      this.router.navigate(['/dashboard']);
      if(this.login=='admin'){
        localStorage.setItem('fonction', 'admin');
      }
      else{
        let nom=localStorage.getItem('user');

        this.employeeService.getEmployeeByName(nom,0,5).subscribe(response=>{
          response.content.forEach(elem=>{

            localStorage.setItem('fonction', elem.fonction.nom);
          });
        })
      }

    }
    }
  )
}

}
