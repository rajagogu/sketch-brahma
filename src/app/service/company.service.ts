import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { CompanyModel } from '../companyModel';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly apiBaseUrl = "https://api.openbrewerydb.org/breweries";
  constructor(private httpClient: HttpClient) {

  }
  getById(id: string): Observable<CompanyModel> {
    let url = this.apiBaseUrl + '/' + id;
    return this.httpClient.get<CompanyModel>(url);
  }
  getListByParam(source: string, sourceId?: string): Observable<CompanyModel[]> {
    let url: string;
    switch (source) {
      case 'city':
        url = this.apiBaseUrl + '?by_city=' + sourceId;
        break;
      case 'state':
        url = this.apiBaseUrl + '?by_state=' + sourceId;
        break;
      default:
        url = this.apiBaseUrl;
        break;
    }
    console.log(url);
    return this.httpClient.get<CompanyModel[]>(url);
  }
}





