import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public EmployeeService: EmployeeService) {}
  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(Form: NgForm) {
    Form.reset();
  }

  getEmployees() {
    this.EmployeeService.GETemployees().subscribe(
      (res) => {
        this.EmployeeService.employees = res;
      },
      (err) => console.error(err)
    );
  }

  addEmployee(Form: NgForm){
    if(Form.value.id) {
      this.EmployeeService.updateEmployees(Form.value).subscribe(
      res => console.log(res),
      err => console.error(err)
      )
    } else {
    this.EmployeeService.POSTemployees(Form.value).subscribe(
      res => {
        this.getEmployees();
        Form.reset();
      },
      (err) => console.error(err)
      );
    }
  }

  getEmployee(Id: String) {
    if(confirm("Eliminar")) {
      this.EmployeeService.deleteEmployee(Id).subscribe(
      (res) => {
        this.getEmployees();
      },
      (err) => console.error(err)
      );
    }

  postEmployees(employee: Employee) {
      this.EmployeeService.selectedEmployee = employee;
      }
  }
}
