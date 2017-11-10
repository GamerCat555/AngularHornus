import { heros } from './../../models/heros.models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  heros: heros [];
  constructor() {
    this.heros =[
      new heros('Mister James', '/assets/images/heros.jpg',  150)  
    ];
  }
  ngOnInit() {
  }

}
