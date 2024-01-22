import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent {
  public selling : Array<any>;
  constructor(public data : DataService){
    this.selling = this.data.selling
  }
}
