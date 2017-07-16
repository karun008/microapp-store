import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-tiles-list',
  templateUrl: './tiles-list.component.html',
  styleUrls: ['./tiles-list.component.css']
})
export class TilesListComponent implements OnInit {
 tiles = [
 {
   name : 'Events',
   detail: '2 found'
 },
 {
   name : 'Workers',
   detail: '1 found'
 }
 ];
  constructor() { }

  ngOnInit() {
  }

}