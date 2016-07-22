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
var magic_service_1 = require("./magic.service");
var hero_detail_component_1 = require("./hero-detail.component");
var CampComponent = (function () {
    function CampComponent(magic) {
        this.magic = magic;
        this.attackEmitter = new core_1.EventEmitter(); //撤退
    }
    //出征
    CampComponent.prototype.onAttack = function (hero) {
        this.attackEmitter.emit(hero);
    };
    //治疗
    CampComponent.prototype.onCure = function (hero) {
        this.magic.cure(hero);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CampComponent.prototype, "heros", void 0);
    __decorate([
        core_1.Output('attack'), 
        __metadata('design:type', core_1.EventEmitter)
    ], CampComponent.prototype, "attackEmitter", void 0);
    CampComponent = __decorate([
        core_1.Component({
            selector: 'camp',
            template: "\n        <div>\n            <h3>\u8425\u5730</h3>\n            <hero-detail *ngFor=\"let h of heros\" [hero]=\"h\" (attack)=\"onAttack($event)\" (cure)=\"onCure($event)\"></hero-detail>\n        </div>\n    ",
            directives: [hero_detail_component_1.HeroDetailComponent],
            providers: [{
                    provide: magic_service_1.MagicService, useFactory: magic_service_1.magicServiceFactory(100)
                }]
        }), 
        __metadata('design:paramtypes', [magic_service_1.MagicService])
    ], CampComponent);
    return CampComponent;
}());
exports.CampComponent = CampComponent;
//# sourceMappingURL=camp.component.js.map