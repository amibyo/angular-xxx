import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../../maintenance.service';
import { Maintenance } from '../../maintenance';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-create-maintenance',
  templateUrl: './create-maintenance.component.html',
  styleUrls: ['./create-maintenance.component.scss']
})
export class CreateMaintenanceComponent implements OnInit {
  DAT: string = moment().format('YYYY-MM-DD HH:mm:ss');
  constructor(private maintenanceService: MaintenanceService,
              private router: Router) { }

  maintenance: Maintenance = new Maintenance();
  submitted = false;
  optionsSelect: Array<any>;

  ngOnInit() {
    this.maintenance.dateE = this.DAT;
    this.maintenance.tech =  '*****';
    this.maintenance.dateS =  '*****';
    this.maintenance.prix = 0;
  }
    saves() {
      this.maintenanceService.createmaintenance(this.maintenance)
        .subscribe(data => console.log(data), error => console.log(error));
      this.maintenance = new Maintenance();
    }
    onSubmit() {
      this.saves();
      this.router.navigate(['/maintenence']);
    }
}
