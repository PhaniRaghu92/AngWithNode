import { Component, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {
  public empModel: Employee = new Employee();

  constructor(private empService: EmployeeService) {}

  submitClick($event: any): void {
    const { name, salary, email, active, location: loc } = this.empModel;

    const newEmp: any = { name, salary, email, active, loc };

    this.empService.saveEmployee(newEmp).subscribe(
      (data) => {
        this.empModel = new Employee();
        alert('Employee saved');
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
