import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaDetailsService {

  constructor(private http:HttpClient) { }


  coronaDetails():Observable<any>{
    return this.http.get('https://www.hpb.health.gov.lk/api/get-current-statistical');
  }


}
