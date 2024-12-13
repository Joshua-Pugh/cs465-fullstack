import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response'; 
import { BROWSER_STORAGE } from '../storage';

import { Trip } from '../models/trips';


@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient, @Inject(BROWSER_STORAGE) private storage: Storage) { }

  baseUrl = 'http://localhost:3000/app_api';

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl + '/' + 'trips');
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl + '/' + 'trips' + '/' + tripCode);
  }

  addTrip(fromData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl + '/' + 'trips', fromData);
  }

 updateTrip(fromData: Trip) : Observable<Trip> {
  return this.http.put<Trip>(this.baseUrl + '/' + 'trips' + '/' + fromData.code, fromData);
 }
 
 // Call to our /login endpoint, returns JWT 
 login(user: User, passwd: string) : Observable<AuthResponse> { 
  // console.log('Inside TripDataService::login'); 
  return this.handleAuthAPICall('login', user, passwd); 

 }

 // Call to our /register endpoint, creates user and returns JWT 
 register(user: User, passwd: string) : Observable<AuthResponse> { 
  console.log('Inside TripDataService::register'); 
  return this.handleAuthAPICall('register', user, passwd);
 }
 
 // helper method to process both login and register methods 
 handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> { 
  // console.log('Inside TripDataService::handleAuthAPICall'); 
  let formData = { name: user.name, email: user.email, password: passwd }; 
  return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData); 
 }
}