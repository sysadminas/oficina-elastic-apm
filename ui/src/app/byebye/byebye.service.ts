import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { v1 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ByebyeService {

  constructor(private http: HttpClient) { }

  call() {
    const correlationId = uuid();
    const httpOptions = {
      headers: new HttpHeaders({'x-correlation-id': correlationId, 'Access-Control-Allow-Origin': 'http://localhost:4200' })
    };
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.http.get<any>('http://localhost:3000/byebye', httpOptions);
  }
}
