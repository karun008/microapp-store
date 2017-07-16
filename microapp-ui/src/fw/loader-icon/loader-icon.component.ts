import { LoaderIconService } from './../services/loader-icon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-icon',
  templateUrl: './loader-icon.component.html',
  styleUrls: ['./loader-icon.component.css']
})
export class LoaderIconComponent implements OnInit {
  ngOnInit(): void {
   
  }

  public activeSpinner: boolean;

  public constructor(spinner: LoaderIconService) {
    spinner.spinnerStatus.subscribe((status: boolean) => {
      this.activeSpinner = status;
    });
  }

}
