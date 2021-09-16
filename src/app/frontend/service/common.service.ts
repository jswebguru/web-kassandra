import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(private http: HttpClient) { }

  getResponse(startingMsgObj): Observable<any> {
    return this.http.post('http://207.244.234.63:9001/api/getResponse', startingMsgObj);
  }
}
