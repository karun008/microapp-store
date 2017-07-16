import { FrameworkConfigService } from './../services/framework-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fw-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {

  constructor(private frameworkConfigService: FrameworkConfigService) {
    console.log(frameworkConfigService.panelIcons[0]);
  }

  ngOnInit() {
  }

}