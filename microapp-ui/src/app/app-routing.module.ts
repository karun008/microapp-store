import { WlResolverService } from './../waitlist/wl-services/wl-resolver.service';
import { WlBodyComponent } from './../waitlist/wl-body/wl-body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: WlBodyComponent, resolve:{ timeslots: WlResolverService } },
  { path: 'waitlist/:id', component: WlBodyComponent, resolve:{ timeslots: WlResolverService } },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }