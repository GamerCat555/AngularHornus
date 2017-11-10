import { SearchResult } from './models/SearchResult.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YouTubeSearchComponent implements OnInit {
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

