import { FrameworkConfigService, FrameWorkConfigSettings } from './../fw/services/framework-config.service';
import { HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService) {
    const config: FrameWorkConfigSettings = {
      panelIcons : [
        /* I know. We will need to use SVGs! 
           This is just for demo of reusable components */
        {imageFile: 'assets/email.png', alt: 'Email', link: ''},
        {imageFile: 'assets/telephone.png', alt: 'Telephone', link: ''},
        {imageFile: 'assets/devices.png', alt: 'Devices', link: ''},
        {imageFile: 'assets/checkList.png', alt: 'Check List', link: ''}
      ]
    };
    frameworkConfigService.configure(config);
  }
}
