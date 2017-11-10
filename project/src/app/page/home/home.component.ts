import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { heroes } from '../../models/heroes.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  heros: heroes[];
  constructor() { 
    this.heros =[
      new heroes('Mister James', '/assets/images/heros.jpg',  150)  
    ];
  }

  ngOnInit() {
  }

}
