import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[]= [];
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value));
    title.value = link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  constructor() {
    this.articles.push(new Article('AngularJS top fw', 'http://angular.io', 10));
    this.articles.push(new Article('Emberjs flop fw', 'http://emberjs.com', 11));
    this.articles.push(new Article('VueJS new Comer fw', 'http://vuejs.org', 12));
  }

}
