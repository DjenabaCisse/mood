import { Component, OnInit } from '@angular/core';
import { Weather } from './../models/weather.model';
import { ApiService } from './../api/api.service';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css'],
})
export class RestapiComponent implements OnInit {


  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getWeathers();
  }

  _weathers: Weather[] = [];

  getWeathers() {
    this.api.getWeathers().subscribe((data) => (this._weathers = data));
  }
}
