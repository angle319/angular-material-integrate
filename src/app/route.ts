import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastComponent, OverlayComponent } from './component'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import {
    MaterialTableModule, MaterialSnackModule, MaterialSidebarModule,
    MaterialToolBarModule, MaterialOverlayModule
  } from 'library/material-lib/src/public-api';
const routes: Routes = [
    {
        path: 'toast',
        component: ToastComponent
    },
    {
        path: 'overlay',
        component: OverlayComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes),MaterialOverlayModule,
        MaterialTableModule,
        MaterialSnackModule,
        MaterialSidebarModule,
        MaterialToolBarModule,],
    exports: [RouterModule],
    declarations: [ToastComponent, OverlayComponent],
    providers: [
        {
            provide: LocationStrategy, useClass: PathLocationStrategy
        }
    ]
})
export class RouteModule { }
