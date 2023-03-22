import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = "http://localhost:4000/api/employees";
  
  selectedEmployee: Employee;
  Employees: Employee[];
  constructor(private http: HttpClient) { }

  GETemployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }

  POSTemployees(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  UPDATEemployee(employee: Employee) {
    return this.http.update(`${this.URL_API}/${employee.Id}`, employee);
  }

  DELETEemployee(Id: String) {
    return this.http.delete(`${this.URL_API}/${Id}`)
  }
}
