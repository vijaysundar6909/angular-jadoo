import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  public category : Array<any>;
  constructor(public data : DataService){
    this.category = this.data.category
  }
}
