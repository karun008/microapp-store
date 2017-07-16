import { WlResolverService } from './../waitlist/wl-services/wl-resolver.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FwModule } from './../fw/fw.module';
import { WlModule } from './../waitlist/wl.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    WlModule,
    MaterialModule,
     AppRoutingModule
  ],
  providers: [WlResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }