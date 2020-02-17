import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import {MapComponent} from "./pages/map/map.component";
import {UserComponent} from "./pages/user/user.component";
import {TablesComponent} from "./pages/tables/tables.component";
import {TypographyComponent} from './pages/typography/typography.component';
import {EmployeeListComponent} from './pages/employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './pages/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { CategorieListComponent } from './pages/categorie-list/categorie-list.component';
import { VenteComponent } from './pages/vente/vente.component';
import { ListMaintenanceComponent } from './pages/list-maintenance/list-maintenance.component';
import { CreateMaintenanceComponent } from './pages/create-maintenance/create-maintenance.component';
import { DetailMaintenanceComponent } from './pages/detail-maintenance/detail-maintenance.component';
import { UpdateMaintenanceComponent } from './pages/update-maintenance/update-maintenance.component';
import { RetourMaintenanceComponent } from './pages/retour-maintenance/retour-maintenance.component';
import { InformatiqueComponent } from './pages/informatique/informatique.component';
import { GsmComponent } from './pages/gsm/gsm.component';
import { InfoComponent } from './pages/info/info.component';
import { PiecegsmComponent } from './pages/piecegsm/piecegsm.component';
import { OccasionComponent } from './pages/occasion/occasion.component';
import { AutreComponent } from './pages/autre/autre.component';
const routes: Routes = [
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'article', component: EmployeeListComponent },
  { path: 'cat', component: CategorieListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'vente/:id', component: VenteComponent },
  { path: 'maintenence', component: ListMaintenanceComponent },
  { path: 'detailm/:id', component: DetailMaintenanceComponent },
  { path: 'updatem/:id', component: UpdateMaintenanceComponent },
  { path: 'repare', component: RetourMaintenanceComponent },
  { path: 'Createmaintenence', component: CreateMaintenanceComponent },
  { path: 'Informatique', component: InformatiqueComponent },
  { path: 'GSM', component: GsmComponent },
  { path: 'info', component: InfoComponent },
  { path: 'PieceGSM', component: PiecegsmComponent },
  { path: 'Occasion', component: OccasionComponent },
  { path: 'Autre', component: AutreComponent },
  { path: "maps", component: MapComponent },
  { path: "users", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: '', redirectTo: 'article', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
