import { VenteService } from '../../vente.service';
import { Vente } from '../../vente';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../../employee';
import {EmployeeService} from '../../employee.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
  vent: Vente = new Vente();
  id: number;
  groupRef: number;
  idarticle: number;
  employee: Employee;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private venteService: VenteService,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params.id;
    this.vent.idarticle = this.id;
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }
  newEmployee(): void {
    this.submitted = false;
    this.vent = new Vente();

  }
  save() {
    this.venteService.createvente(this.vent)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vent = new Vente();
  }
  updateEmployee() {

    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => console.log(data), error => console.log(error));

    this.employee = new Employee();
  }

  onSubmit() {
    this.employee.qte = this.employee.qte - this.vent.qte;
    this.save();
    this.updateEmployee();
    this.router.navigate(['cat']);
  }
}
