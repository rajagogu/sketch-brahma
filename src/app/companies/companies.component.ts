import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyModel } from '../companyModel';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: CompanyModel[];
  defaultPage: number = 1;
  modalTitle: string;
  companyData = new CompanyModel();
  companyForm: any = new FormGroup({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)])
  })
  get Mobile() {
    return this.companyForm.get('mobile')
  }
  get City() {
    return this.companyForm.get('city')
  }
  get Name() {
    return this.companyForm.get('name')
  }
  constructor(private companyService: CompanyService, private tstService: ToastrService) { }

  ngOnInit(): void {
    this.companyService.getListByParam('all').subscribe(responce => {
      this.companies = responce;
      console.log(responce);
    }),

      (error: Response) => {
        if (error.status === 404) {
          alert("Looking something not avilable");
        }
        else {
          alert("Unhandled error Occured");
        }
      }
  }
  saveDetails() {
    //   if (this.companyData.id) {
    //     this.companyService.updateCompany(this.companyData.id, this.companyData).subscribe(responce => {
    //       let editindex = this.companies.indexOf(this.companyData);
    //       this.companies[editindex] = responce;
    //       this.tstService.success('Updated Successfull')
    //     }),
    //       (error: Response) => {
    //         if (error.status === 400) {
    //           alert("the given input bad input error....");
    //         }

    //         else {
    //           alert("Unhandled error occured......");
    //         }
    //       }

    //   }
    //   else {
    //     this.companyService.CreateCompany(this.companyData).subscribe(output => {
    //       this.companies.splice(0, 0, output);
    //       this.tstService.success('Added Successfull')
    //     }), (error: Response) => {
    //       if (error.status === 400) {
    //         alert("the given input bad input error....");
    //       }
    //       else if (error.status === 404) {
    //         alert("Searching Comment deleted ...");
    //       }
    //       else {
    //         alert("Unhandled error occured......");
    //       }
    //     }
    //   }
    this.companyData = new CompanyModel();
    this.companyForm.reset();


  }
  editDetails(company: CompanyModel) {
    this.companyData = company;
    this.modalTitle = "EDIT COMPANY";
  }
  addDetails() {
    this.modalTitle = "ADD COMPANY";
    this.companyData = new CompanyModel();
  }

}
