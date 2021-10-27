import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOtions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private http: HttpClient) { }

  getFoods() {
    return this.http.get('http://localhost:3000/api/food')
  }
}
