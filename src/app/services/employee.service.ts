// employee.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://your-backend-api/employees'; // Update with your backend API base URL

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  // Get employee by ID
  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${employeeId}`);
  }

  // Add a new employee
  addEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employeeData);
  }

  // Update an existing employee
  updateEmployee(employeeId: string, employeeData: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${employeeId}`, employeeData);
  }

  // Delete an employee by ID
  deleteEmployee(employeeId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${employeeId}`);
  }
}
