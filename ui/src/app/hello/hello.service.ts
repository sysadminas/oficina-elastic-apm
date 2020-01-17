import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { v1 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  call() {
    const correlationId = uuid()
    const httpOptions = {
      headers: new HttpHeaders({'x-correlation-id': correlationId })
    };
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    httpOptions.headers.append('access-control-request-method', 'GET');
    return this.http.get<any>('http://localhost:3000/hello', httpOptions);
  }
}
