import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trips';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/app_api/trips';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  addTrip(fromData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, fromData);
  }

 updateTrip(fromData: Trip) : Observable<Trip> {
  return this.http.put<Trip>(this.url + '/' + fromData.code, fromData);
 }

}