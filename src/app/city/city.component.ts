import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyModel } from '../companyModel';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  companies: CompanyModel[];
  city: string = '';
  defaultPage: number = 1;
  modalTitle: string;
  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.city = id ? id : '';
    this.companyService.getListByParam('city', this.city)
      .subscribe(response => {
        this.companies = response;
        console.log(response)
      })
  }
}
