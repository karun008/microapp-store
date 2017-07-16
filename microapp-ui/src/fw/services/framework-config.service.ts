import { Injectable } from '@angular/core';

export interface IconFiles {
    imageFile: string;
    link: string;
    alt: string;
}

export interface FrameWorkConfigSettings {
    panelIcons?: Array<IconFiles>;
}
@Injectable()
export class FrameworkConfigService {

    panelIcons= new Array<IconFiles>();
    configure(settings: FrameWorkConfigSettings): void {
        Object.assign(this, settings);
    }
}