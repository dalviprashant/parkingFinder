import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http , Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) {}

  getParkingList(ccity) {


   return this.http.get('http://localhost:3000/api/parkingspot/' + ccity)
          .pipe(map(res  => res.json()));
  }
}


