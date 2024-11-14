import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderinfoService {

  constructor(private http:HttpClient) {
    http.get(process.env['API_URL']+'');
   }
}
