import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import {orderBy} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  userDetails(serachString: string)
  {
    return this.http.get(`https://api.github.com/users/${serachString}/repos`);
  } 

  getUser(serachString: string)
  {
    return this.http.get(`https://api.github.com/search/users?q=${serachString}`);
  }
 
  
  sortBy = (data: any, row, by = ['desc']) =>
    orderBy(data, [...row], by);

}
