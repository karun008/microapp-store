import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fw-tile-thumbnail',
  templateUrl: './tile-thumbnail.component.html',
  styleUrls: ['./tile-thumbnail.component.css']
})
export class TileThumbnailComponent implements OnInit {
  @Input() tile:any;
   
  constructor() { }

  ngOnInit() {
  }

}