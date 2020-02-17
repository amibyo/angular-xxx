import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../employee';
import {Router} from '@angular/router';
import {EmployeeService} from '../../employee.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  employees: Observable<Employee[]>;
  cat2: Observable<Employee[]>;
  cat3: Observable<Employee[]>;
  cat4: Observable<Employee[]>;
  cat5: Observable<Employee[]>;
  cat6: Observable<Employee[]>;
  private router: Router;
  constructor(router: Router, private employeeService: EmployeeService) {
    this.router = router;
  }

  ngOnInit() {
    this.reloadData3();
  }
  reloadData3() {
    this.cat3 = this.employeeService.getcatarticle('Piece Informatique');
  }
  vente(id: number) {
    this.router.navigate(['vente', id]);
  }
}
