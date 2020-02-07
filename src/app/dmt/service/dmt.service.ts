import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DmtService {

  constructor(private http: HttpClient) { }

  getDatas(): Observable<any> {
    return this.http.get('../../assets/dmt.json');
  }

}
