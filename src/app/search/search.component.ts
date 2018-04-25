import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  travellersList:any[];
  selectedTravellers:string;
  constructor() {
    this.travellersList = [];

   }

  ngOnInit() {
    for(var i=1;i<10;i++){
      this.travellersList.push(i);
    }
    
  }

}
