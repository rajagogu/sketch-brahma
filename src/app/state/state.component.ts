import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyModel } from '../companyModel';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  state: string;
  companies: CompanyModel[];
  defaultPage: number = 1;
  modalTitle: string;
  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.state = id ? id : '';
    this.companyService.getListByParam('state', this.state)
      .subscribe(response => {
        this.companies = response;
        console.log(response)
      })
  }

}
