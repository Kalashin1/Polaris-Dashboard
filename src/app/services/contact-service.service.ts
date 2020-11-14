import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ContactObj } from '../interface/contact-obj';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private options = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'}),
  }
  constructor(private http : HttpClient) { }

  sendMail(obj : ContactObj):Observable<any>
  {
    return this.http.post('http://localhost:4000/contact-us', obj, this.options)
  }

}
