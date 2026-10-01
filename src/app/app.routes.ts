import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"nouha",
        loadComponent: ()=> import("./nouha/nouha")
    },
    {
        path:"nouha1",
        loadComponent: ()=> import("./nouha1/nouha1")
    }
];


