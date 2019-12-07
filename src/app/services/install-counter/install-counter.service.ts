import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstallCounterService {

  constructor(private http: HttpClient) { }

  getCount() {
    return this.http.get('https://api.countapi.xyz/get/turtle-cove/dev');
  }

  async incrementCount() {
    return this.http.get('https://api.countapi.xyz/update/turtle-cove/dev?amount=1');
  }
}
