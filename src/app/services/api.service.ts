import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepModel } from '../model/DepModel.model';
import { CityModel } from '../model/CityModel.model';

const apiRoot = 'https://geo.api.gouv.fr/'

const queryOptions = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Accept: 'text/html, application/xhtml+xml, */*',
  },
  responseType: 'json' as 'json',
  //responseType: 'blob' as 'json',
};

@Injectable({
  providedIn: 'root',
})

export class apiService {


  constructor(private http: HttpClient) {

  }

  getDepartements(code: string){
    const url = `${apiRoot}regions/${code}/departements`;
    return this.http.get<DepModel>(url, queryOptions);
  } 
  
   getCity(code: string){
    const url = `${apiRoot}departements/${code}/communes`;
    return this.http.get<CityModel>(url, queryOptions);
  } 

}
