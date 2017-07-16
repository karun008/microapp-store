import { FrameworkBodyComponent } from './../fw/framework-body/framework-body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: FrameworkBodyComponent, resolve:{ } },
  { path: 'waitlist/:id', component: FrameworkBodyComponent, resolve:{  } },
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