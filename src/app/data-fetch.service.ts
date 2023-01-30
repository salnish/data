import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('http://localhost:5000/api/admin');
  }
}
