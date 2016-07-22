"use strict";
var router_1 = require('@angular/router');
var first_component_1 = require("../demo/first.component");
var binding_component_1 = require("../demo/binding.component");
var hero_component_1 = require("../demo/hero.component");
var routes = [
    { path: 'demo/first', component: first_component_1.FirstComponent },
    { path: 'demo/binding', component: binding_component_1.BindingComponent },
    { path: 'demo/transfer', component: hero_component_1.HeroComponent },
    { path: '', redirectTo: 'demo/first', pathMatch: 'prefix' },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map