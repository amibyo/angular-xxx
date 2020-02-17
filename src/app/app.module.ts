import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import {CommonModule} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import {UserComponent} from './pages/user/user.component';
import {TablesComponent} from './pages/tables/tables.component';
import {TypographyComponent} from './pages/typography/typography.component';
import { BrowserModule } from '@angular/platform-browser';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {MapComponent} from './pages/map/map.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import {MatInputModule, MatOptionModule, MatSelectModule, MatNativeDateModule, MatIconModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserModule,
    MatInputModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatInputModule, MatNativeDateModule,
    FormsModule,
  ],
  declarations: [AppComponent, EmployeeListComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    MapComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    JwPaginationComponent,
    CategorieListComponent,
    VenteComponent,
    ListMaintenanceComponent,
    CreateMaintenanceComponent,
    DetailMaintenanceComponent,
    UpdateMaintenanceComponent,
    RetourMaintenanceComponent,
    InformatiqueComponent,
    GsmComponent,
    InfoComponent,
    PiecegsmComponent,
    OccasionComponent,
    AutreComponent,
  ],
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
