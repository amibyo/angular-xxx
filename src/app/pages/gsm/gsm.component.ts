import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../employee.service';
import { Employee } from '../../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gsm',
  templateUrl: './gsm.component.html',
  styleUrls: ['./gsm.component.scss']
})
export class GsmComponent implements OnInit {
  cat2: Observable<Employee[]>;
  private router: Router;
  constructor(router: Router, private employeeService: EmployeeService) {
    this.router = router;
  }

  ngOnInit() {
    this.reloadData2();
  }
  reloadData2() {
    this.cat2 = this.employeeService.getcatarticle('Accessoire GSM');
  }
  vente(id: number) {
    this.router.navigate(['vente', id]);
  }
}
