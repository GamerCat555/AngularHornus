import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {
  @Input() name: string;
  constructor() {
    this.name = 'gillessss';
   }

  ngOnInit() {
  }

}
