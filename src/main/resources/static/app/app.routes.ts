import { provideRouter, RouterConfig } from '@angular/router';

import {FirstComponent} from "../demo/first.component";
import {BindingComponent} from "../demo/binding.component";
import {HeroComponent} from "../demo/hero.component";

const routes:RouterConfig = [
    {path: 'demo/first', component: FirstComponent},
    {path: 'demo/binding', component: BindingComponent},
    {path: 'demo/transfer', component: HeroComponent},
    {path: '', redirectTo: 'demo/first', pathMatch: 'prefix'},
];

export const appRouterProviders = [
    provideRouter(routes)
];
