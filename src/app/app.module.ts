import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './trx/navbar/navbar.component';
import { TrxComponent } from './trx/trx.component';
import { DmtComponent } from './dmt/dmt.component';
import { DmtTableComponent } from './dmt/dmt-table/dmt-table.component';
import { DmtFormComponent } from './dmt/dmt-form/dmt-form.component';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DialogModule} from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { MultiSelectModule } from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DmtTreeComponent } from './dmt/dmt-tree/dmt-tree.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProjectOneUsComponent } from './project-one-us/project-one-us.component';
import { ProjectOneBodyComponent } from './project-one-us/project-one-body/project-one-body.component';
import { ProjectOneSearchComponent } from './project-one-us/project-one-search/project-one-search.component';
import { LoanTabComponent } from './project-one-us/project-one-body/loan-tab/loan-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrxComponent,
    DmtComponent,
    DmtTableComponent,
    DmtFormComponent,
    DmtTreeComponent,
    ProjectOneUsComponent,
    ProjectOneBodyComponent,
    ProjectOneSearchComponent,
    LoanTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    TableModule,
    TreeModule,
    InputTextModule,
    CardModule,
    ScrollPanelModule,
    DialogModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    TabViewModule,
    ButtonModule,
    PanelModule,
    AccordionModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
