import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../employee.service';
import { Employee } from '../../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-piecegsm',
  templateUrl: './piecegsm.component.html',
  styleUrls: ['./piecegsm.component.scss']
})
export class PiecegsmComponent implements OnInit {

  cat4: Observable<Employee[]>;

  private router: Router;
  constructor(router: Router, private employeeService: EmployeeService) {
    this.router = router;
  }

  ngOnInit() {
    this.reloadData4();
  }
reloadData4() {
    this.cat4 = this.employeeService.getcatarticle('Piece GSM');
  }
  vente(id: number) {
    this.router.navigate(['vente', id]);
  }
}
