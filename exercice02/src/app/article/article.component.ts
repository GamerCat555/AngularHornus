import { Article } from './article.modele';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  constructor() {}

  votesUp(): boolean {
    return this.article.votesUp();
  }

  votesDown(): boolean {
    return this.article.votesDown();
  }
  ngOnInit() {
  }

}
