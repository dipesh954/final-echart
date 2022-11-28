import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartjsService {

  constructor(private http: HttpClient) { }
  apiUrl = "https://tvbrand.herokuapp.com/agGrid";

  getBrandData(){
    return this.http.get(this.apiUrl);
  }
}
