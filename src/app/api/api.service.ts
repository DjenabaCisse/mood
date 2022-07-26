import { Injectable } from '@angular/core';
import { Weather } from './../models/weather.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  createWeather(weather: Weather): Observable<any> {
    let body = JSON.stringify(weather);
    alert(weather);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .post(API_URL + '/books', body, { headers })
      .pipe(catchError(this.handleError));
  }

  getWeathers(): Observable<Weather[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .get<Weather[]>(API_URL + '/weathers', { headers })
      .pipe(catchError(this.handleError));
  }

  getWeatherById(weatherId: string): Observable<Weather> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .get<Weather>(API_URL + '/weathers/' + weatherId, { headers })
      .pipe(catchError(this.handleError));
  }

  updateWeather(weather: Weather): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .put(API_URL + '/weathers/' + weather.weatherId, { headers })
      .pipe(catchError(this.handleError));
  }

  deleteWeather(weatherId: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .delete(API_URL + '/weathers/' + weatherId, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    return throwError('Your error');
  }
}
