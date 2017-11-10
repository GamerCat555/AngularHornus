import { SearchResult } from './../../models/SearchResult.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { ToutTubeSearchService } from '../../tout-tube-search.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus />`,
  encapsulation: ViewEncapsulation.None
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor(private toutube: ToutTubeSearchService, private el: ElementRef) {}

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter((text: string) => text.length > 1)
    .debounceTime(250)
    .do(() => this.loading.emit(true))
    .map((query: string) => this.toutube.search(query))
    .switch()
    .subscribe(
      (results: SearchResult[]) => {
        console.log(results)
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }

}
