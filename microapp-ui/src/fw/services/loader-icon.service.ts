import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class LoaderIconService {
  public spinnerStatus: Subject<boolean> = new Subject();
  private _active: boolean = false;
  public showLoader : boolean = true;
  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
    this.spinnerStatus.next(v);
  }

  public start(): void {
    this.active = this.showLoader;
  }

  public stop(): void {
    this.active = false;
  }
}