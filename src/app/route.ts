import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastComponent, OverlayComponent, SimplePageComponent,TableComponent } from './component'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import {
    MaterialTableModule, MaterialSnackModule, MaterialSidebarModule,
    MaterialToolBarModule, MaterialOverlayModule, MaterialSimplePageModule
} from 'library/material-lib/src/public-api';
const routes: Routes = [
    {
        path: 'toast',
        component: ToastComponent
    },
    {
        path: 'overlay',
        component: OverlayComponent
    }, {
        path: 'simple_path',
        component: SimplePageComponent
    },{
        path: 'table',
        component: TableComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes), MaterialOverlayModule,
        MaterialTableModule,
        MaterialSnackModule,
        MaterialSidebarModule,
        MaterialToolBarModule,
        MaterialSimplePageModule],
    exports: [RouterModule],
    declarations: [ToastComponent, OverlayComponent, SimplePageComponent, TableComponent],
    providers: [
        {
            provide: LocationStrategy, useClass: PathLocationStrategy
        }
    ]
})
export class RouteModule { }
