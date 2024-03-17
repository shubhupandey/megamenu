import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MegaMenuService {

  constructor(
    private http: HttpClient
    ) { }


  getMenuData(): Observable<any> {
    // return of('assets/menu.json');
    return this.http.get<any>('assets/menu.json');
  }
}
