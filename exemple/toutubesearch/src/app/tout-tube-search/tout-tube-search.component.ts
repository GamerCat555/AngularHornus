import { SearchResult } from '../models/SearchResult.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tout-tube-search',
  templateUrl: './tout-tube-search.component.html',
  styleUrls: ['./tout-tube-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToutTubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() {
    this.results= [];
   }

  ngOnInit() {
  }
  updateResults(results: SearchResult[]) {
    this.results = results;
  }
}
