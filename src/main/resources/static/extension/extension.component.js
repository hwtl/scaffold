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
/**
 * Created by charles on 16/6/29.
 */
var core_1 = require('@angular/core');
var ExtensionComponent = (function () {
    function ExtensionComponent() {
    }
    ExtensionComponent = __decorate([
        core_1.Component({
            selector: 'extension',
            template: "\n        <h3>Extension</h3>\n    ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], ExtensionComponent);
    return ExtensionComponent;
}());
exports.ExtensionComponent = ExtensionComponent;
//# sourceMappingURL=extension.component.js.map