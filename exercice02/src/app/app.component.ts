import { Article } from './article/article.modele';
import { ArticleComponent } from './article/article.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[] = [];
  addArticle (title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value,link.value));
    title.value = link.value ='';
    return false;
  }
  
  sortedArticles():Article[]{
    return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
  }

  constructor() {
    this.articles.push(new Article('angularJs top fw','http://angular.io', 10));
    this.articles.push(new Article('EmberJs flop fw','https://www.emberjs.com', 10));
    this.articles.push(new Article('VueJs new comer fw','https://fr.vuejs.org', 1000));
  }
}
  