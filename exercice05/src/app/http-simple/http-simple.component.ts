import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-http-simple',
  templateUrl: './http-simple.component.html',
  styleUrls: ['./http-simple.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HttpSimpleComponent implements OnInit {
  data :object;
  loading :boolean;
  constructor(private http: Http) {
    this.loading = true;
   }

  makeRequest():void{
      this.http.get('https://www.prevision-meteo.ch/services/json/lat=46.259lng=5.235')
      .subscribe((res: Response) => {
        this.data = res;
        this.loading = false;
      },(err => console.log));
  }

  ngOnInit() {
  }

}
