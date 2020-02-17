import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private baseUrl = 'http://localhost:8080/api/v3/vente';

  constructor(private http: HttpClient) { }

  getvente(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createvente(vente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, vente);
  }

  updatevente(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletevente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getventeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
