import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get<any> ('http://localhost:8080/employees');
  }
  getEmployeeByName( motCle: string, page: number, size: number): Observable<any> {
    return this.http.get<any> ('http://localhost:8080/employees/listEmployee?mc=' + motCle + '&size=' + size + '&page=' + page);
  }
  getEmployee(code: any): Observable<any>{
    return this.http.get<any> ('http://localhost:8080/employees/' + code);
  }

  saveEmployee(employe: Employee): Observable<any> {
    return this.http.post<any>('http://localhost:8080/employees', employe);
  }

  updateEmployee( employe: Employee): Observable<any> {
    return this.http.put<any>('http://localhost:8080/employees/' + employe.code, employe);
  }

  deleteEmployee( code: any): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/employees/' + code);
  }
}

