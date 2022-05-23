import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Promotion } from '../model/promotion.model';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private baseUrl:string  = 'http://localhost:8081/api/promotion';
  constructor(private http : HttpClient) { }
  // get(): Observable<any> {
  //   return this.http.get(this.base_url);
  // }
  // add(entity:any): Observable<any> {
  //   return this.http.post(this.base_url, entity);
  // }
  // findId(id:any): Observable<any> {
  //   return this.http.get(this.base_url + '/' + id);
  // }
  // edit(id:any, entity:any): Observable<any> {
  //   return this.http.put(this.base_url + '/' + id, entity);
  // }
  // remove(id:any): Observable<any> {
  //   return this.http.delete(this.base_url + '/' + id);
  // }
  getPromotion() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getPromotionById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id);
  }

  createPromotion(promotion: Promotion): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, promotion);
  }

  updatePromotion(id: number, promotion: Promotion): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + "/" + promotion.id, promotion);
  }

  deletePromotion(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + "/" + id);
  }
}
