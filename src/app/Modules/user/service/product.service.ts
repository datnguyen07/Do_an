import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_url:string  = 'http://localhost:8081/api/product';
  constructor(private http : HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.base_url);
  }
  findId(id:any): Observable<any> {
    return this.http.get(this.base_url + '/' + id);
  }
  add(entity:any): Observable<any> {
    return this.http.post(this.base_url, entity);
  }
  edit(id:any, entity:any): Observable<any> {
    return this.http.put(this.base_url + '/' + id, entity);
  }
  remove(id:any): Observable<any> {
    return this.http.delete(this.base_url + '/' + id);
  }
}
