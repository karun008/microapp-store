import { Component, OnInit } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MdIconRegistry, MdDialog} from '@angular/material';
import {MdDatepickerModule, MdNativeDateModule, MdRadioModule} from '@angular/material';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fw-framework-body',
  templateUrl: './framework-body.component.html',
  styleUrls: ['./framework-body.component.css']
})
export class FrameworkBodyComponent implements OnInit {

  favoriteSeason: string;

  seasons = [
    '7AM-9AM',
    '9AM-11AM',
    '11AM-1PM',
    '1PM-3PM',
  ];

orders = [
    {
      type: 'Freelancers',
      number: '1090232102323',
      date: '24 April 2017',
      status: 'Open'
    },
    {
      type: 'Bidding',
      number: '1020232102323',
      date: '01 March 2017',
      status: 'Completed'
    }
    // ...
  ];

  categories = [
    {
      title: 'Freelancers',
      details: '',
      number :'2'
    },
    {
      title: 'Bidding',
      details: '',
      number :'1'
    },
    {
      title: 'Billing',
      details: 'Due date today',
      number :'1'
    },
    {
      title: 'Tickets',
      details: '',
      number :'4'
    },
    {
      title: 'Service Requests',
      details: '',
      number :'4'
    },
    {
      title: 'History',
      details: '',
      number :'3'
    }

  
  ];
  constructor(private dialog: MdDialog) { }
  private openAdminDialog() {
    this.dialog.open(DialogComponent);
  }
  OnChangeTheme(){
    //this.isDarkTheme = !isDarkTheme;
  }
  ngOnInit() {
  }

}