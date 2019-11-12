import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  names: Array<string>;

  constructor(private _dataservice : DataService) { }

  ngOnInit() {
    this.names = this._dataservice.names;
    this._dataservice.names.push('Urja');
    this._dataservice.names.pop();
  }

}
