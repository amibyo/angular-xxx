import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../employee.service';
import { Employee } from '../../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-informatique',
  templateUrl: './informatique.component.html',
  styleUrls: ['./informatique.component.scss']
})
export class InformatiqueComponent implements OnInit {
  employees: Observable<Employee[]>;

  private router: Router;
  constructor(router: Router, private employeeService: EmployeeService) {
    this.router = router;
  }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeeService.getcatarticle('Accessoire Informatique');
  }
  vente(id: number) {
    this.router.navigate(['vente', id]);
  }
}
