"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BindingComponent = (function () {
    function BindingComponent() {
        this.name = "world";
        this.value = "100";
        this.background = "#ddd";
        this.href = "http://www.baidu.com";
    }
    BindingComponent.prototype.onInput = function (event) {
        console.log(event);
    };
    BindingComponent = __decorate([
        core_1.Component({
            selector: 'demo-binding',
            template: "\n        <p>Hello {{name}}</p>\n        <p [style.background]=\"background\">background</p>\n        <p><a [href]=\"href\">baidu</a></p>\n        <p><input type=\"text\" [(ngModel)]=\"value\" (input)=\"onInput($event)\"/> current value : {{value}}</p>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BindingComponent);
    return BindingComponent;
}());
exports.BindingComponent = BindingComponent;
//# sourceMappingURL=binding.component.js.map