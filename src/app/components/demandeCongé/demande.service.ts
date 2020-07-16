import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(public http: HttpClient) { }

  getCongés(): Observable<any>{
    return this.http.get<any> ('http://localhost:8080/conges');
  }
  /*getEmployeeByName( motCle: string, page: number, size: number): Observable<any> {
    return this.http.get<any> ('http://localhost:8080/employees/listEmployee?mc=' + motCle + '&size=' + size + '&page=' + page);
  }

  getEmployee(code: any): Observable<any>{
    return this.http.get<any> ('http://localhost:8080/employees/' + code);
  }*/

/*
  saveEmployee(employe: Employee): Observable<any> {
    return this.http.post<any>('http://localhost:8080/employees', employe);
  }
*/

  /*updateEmployee( employe: Employee): Observable<any> {
    return this.http.put<any>('http://localhost:8080/employees/' + employe.code, employe);
  }*/

}

