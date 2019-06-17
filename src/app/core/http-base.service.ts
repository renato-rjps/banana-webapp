import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  private headers = new HttpHeaders();
  private endpoint = `http://localhost:8080/banana-api`;

  constructor(
    private httpClient: HttpClient) {
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getAll<T>(path: string) {
    return this.httpClient.get<T>(`${this.endpoint}${path}`, { observe: 'response' });
  }

  getSingle<T>(path: string) {
    return this.httpClient.get<T>(`${this.endpoint}${path}`);
  }

  add<T>(path: string, toAdd: T) {
    return this.httpClient.post<T>(`${this.endpoint}${path}`, toAdd, { headers: this.headers });
  }

  update<T>(url: string, toUpdate: T) {
    return this.httpClient.put<T>(url,
      toUpdate,
      { headers: this.headers });
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }

  fetch(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
