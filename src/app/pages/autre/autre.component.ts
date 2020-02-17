import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../employee.service';
import { Employee } from '../../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-autre',
  templateUrl: './autre.component.html',
  styleUrls: ['./autre.component.scss']
})
export class AutreComponent implements OnInit {

  cat6: Observable<Employee[]>;
  private router: Router;
  constructor(router: Router, private employeeService: EmployeeService) {
    this.router = router;
  }

  ngOnInit() {
    this.reloadData6();
  }
  reloadData6() {
    this.cat6 = this.employeeService.getcatarticle('Autre');
  }
  vente(id: number) {
    this.router.navigate(['vente', id]);
  }
}
