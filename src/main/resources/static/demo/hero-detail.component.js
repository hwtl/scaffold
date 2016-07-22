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
var hero_1 = require("./hero");
var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
        this.dead = new core_1.EventEmitter();
        this.recruitEmitter = new core_1.EventEmitter(); //招募
        this.attackEmitter = new core_1.EventEmitter(); //出征
        this.backEmitter = new core_1.EventEmitter(); //撤退
        this.cureEmitter = new core_1.EventEmitter(); //治疗
    }
    HeroDetailComponent.prototype.recruit = function () {
        this.recruitEmitter.emit(this.hero);
    };
    HeroDetailComponent.prototype.attack = function () {
        this.attackEmitter.emit(this.hero);
    };
    HeroDetailComponent.prototype.back = function () {
        this.backEmitter.emit(this.hero);
    };
    HeroDetailComponent.prototype.cure = function () {
        this.cureEmitter.emit(this.hero);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], HeroDetailComponent.prototype, "dead", void 0);
    __decorate([
        core_1.Output('recruit'), 
        __metadata('design:type', core_1.EventEmitter)
    ], HeroDetailComponent.prototype, "recruitEmitter", void 0);
    __decorate([
        //招募
        core_1.Output('attack'), 
        __metadata('design:type', core_1.EventEmitter)
    ], HeroDetailComponent.prototype, "attackEmitter", void 0);
    __decorate([
        //出征
        core_1.Output('back'), 
        __metadata('design:type', core_1.EventEmitter)
    ], HeroDetailComponent.prototype, "backEmitter", void 0);
    __decorate([
        //撤退
        core_1.Output('cure'), 
        __metadata('design:type', core_1.EventEmitter)
    ], HeroDetailComponent.prototype, "cureEmitter", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            template: "\n        <div style=\"margin: 5px 0;\">\n            <span [style.text-decoration]=\"hero.blood==0?'line-through':'none'\" style=\"width: 120px;display: inline-block;\">{{hero.name}}  {{hero.blood}}HP</span>\n            <button (click)=\"recruit($event)\" *ngIf=\"hero.status==0\" class=\"btn btn-sm btn-default\">\u62DB\u52DF</button>\n            <button (click)=\"attack($event)\" *ngIf=\"hero.status==1 && hero.blood > 0\" class=\"btn btn-sm btn-primary\">\u51FA\u5F81</button>\n            <button (click)=\"back($event)\" *ngIf=\"hero.status==2\" class=\"btn btn-sm btn-danger\">\u64A4\u9000</button>\n            <button (click)=\"cure($event)\" *ngIf=\"hero.status==1||hero.status==2\" class=\"btn btn-sm btn-success\">\u6CBB\u7597</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map