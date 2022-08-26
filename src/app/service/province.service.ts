import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Province } from '../model/province.interface';
import { District } from '../model/district.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  constructor(private http: HttpClient) { }

  apiProvince: string = "http://localhost:3000/province";
  apiDistrict: string = "http://localhost:3000";

  getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(this.apiProvince)
  }
}
