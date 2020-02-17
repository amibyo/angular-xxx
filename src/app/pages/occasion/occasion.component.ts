import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../employee.service';
import { Employee } from '../../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.scss']
})
export class OccasionComponent implements OnInit {
  cat5: Observable<Employee[]>;

  private router: Router;
  constructor(router: Router, private employeeService: EmployeeService) {
    this.router = router;
  }

  ngOnInit() {
    this.reloadData5();
  }
  reloadData5() {
    this.cat5 = this.employeeService.getcatarticle('Materiels Occasion');
  }
  vente(id: number) {
    this.router.navigate(['vente', id]);
  }
}
