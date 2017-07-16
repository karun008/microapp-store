import { DialogComponent } from './dialog/dialog.component';
import { AppComponent } from './../app/app.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { TilesListComponent } from './tiles-list/tiles-list.component';
import { FooterComponent } from './footer/footer.component';
import { TileThumbnailComponent } from './tile-thumbnail/tile-thumbnail.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdNativeDateModule, MdRadioModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, // angular 4.0+ only
     MaterialModule,
    FlexLayoutModule,
    MdNativeDateModule,
    MdRadioModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    RibbonComponent,
    TilesListComponent,
    FooterComponent,
    TileThumbnailComponent,
    DialogComponent
],
entryComponents: [DialogComponent],
providers: [
  FrameworkConfigService
],
bootstrap:[AppComponent],
  exports: [
    FrameworkBodyComponent,
    TitleBarComponent
  ]
})
export class FwModule {

   isDarkTheme = true;
   constructor(){
     console.log(this.isDarkTheme);
    }
}