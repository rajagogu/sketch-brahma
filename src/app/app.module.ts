import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from "ngx-pagination";
import { CompanyService } from './service/company.service';
import { CompanydetailsComponent } from './companydetails/companydetails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "city/:id",
    component: CityComponent
  },
  {
    path: "state/:id",
    component: StateComponent
  },
  {
    path: "company-detail/:id",
    component: CompanydetailsComponent
  },
  {
    path: "company",
    component: CompaniesComponent
  },
  {
    path: "**",
    component: NotfoundComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CityComponent,
    StateComponent,
    HomeComponent,
    NotfoundComponent,
    CompanydetailsComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [CompanyService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
