import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  deleteEmployee(employeeId: string): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => {
        // Reload employees after successful deletion
        this.loadEmployees();
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
}