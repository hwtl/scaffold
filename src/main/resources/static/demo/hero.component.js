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
var hero_detail_component_1 = require("./hero-detail.component");
var hero_1 = require("./hero");
var battleground_component_1 = require("./battleground.component");
var camp_component_1 = require("./camp.component");
var common_service_1 = require("./common.service");
var HeroComponent = (function () {
    function HeroComponent(commonService) {
        this.heroRepo = [
            new hero_1.Hero("死神"),
            new hero_1.Hero("半藏"),
            new hero_1.Hero("猎空"),
            new hero_1.Hero("堡垒"),
            new hero_1.Hero("源氏"),
            new hero_1.Hero("麦克雷"),
            new hero_1.Hero("法老之鹰")
        ];
        this.myHeros = [];
        this.fightingHeros = [];
    }
    //sum:number;
    HeroComponent.prototype.ngOnInit = function () {
        //this.sum = this.left + this.right;
    };
    //招募
    HeroComponent.prototype.recruit = function (hero) {
        this.heroRepo.splice(this.heroRepo.indexOf(hero), 1);
        this.myHeros.unshift(hero);
        hero.status = 1;
    };
    //出征
    HeroComponent.prototype.onAttack = function (hero) {
        this.myHeros.splice(this.myHeros.indexOf(hero), 1);
        this.fightingHeros.push(hero);
        hero.status = 2;
    };
    //撤退
    HeroComponent.prototype.onBack = function (hero) {
        this.fightingHeros.splice(this.fightingHeros.indexOf(hero), 1);
        this.myHeros.unshift(hero);
        hero.status = 1;
    };
    //死亡
    HeroComponent.prototype.onDead = function (hero) {
        this.heroRepo.push(new hero_1.Hero(hero.name, 1000));
        this.fightingHeros.splice(this.fightingHeros.indexOf(hero), 1);
    };
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'demo-hero',
            template: "\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <h3>\u9152\u9986</h3>\n                <ul class=\"list-unstyled\">\n                    <li *ngFor=\"let h of heroRepo\">\n                        <hero-detail [hero]=\"h\" (recruit)=\"recruit($event)\"></hero-detail>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-3\">\n                <camp  [heros]=\"myHeros\" (attack)=\"onAttack($event)\"></camp>\n            </div>\n            <div class=\"col-md-6\">\n                <battleground #bat [heros]=\"fightingHeros\" (back)=\"onBack($event)\"></battleground>\n            </div>\n            <input type=\"number\" [(ngModel)]=\"left\"/>\n            <input type=\"number\" [(ngModel)]=\"right\"/>\n            <input type=\"number\" [value]=\"left + right\"/>\n        </div>\n    ",
            directives: [hero_detail_component_1.HeroDetailComponent, camp_component_1.CampComponent, battleground_component_1.BattlegroundComponent],
            providers: [common_service_1.CommonService]
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map