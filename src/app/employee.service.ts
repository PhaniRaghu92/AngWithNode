import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpclient: HttpClient) {}

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpclient.post<Employee>(
      'http://localhost:5000/api/employee',
      employee,
      { responseType: 'json' }
    );
  }
}
