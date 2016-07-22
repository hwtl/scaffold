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
var BattlegroundComponent = (function () {
    function BattlegroundComponent(magic) {
        this.magic = magic;
        this.heros = [];
        this.backEmitter = new core_1.EventEmitter(); //撤退
        //differ: any;
        this.logs = [];
    }
    BattlegroundComponent.prototype.onBack = function (hero) {
        this.backEmitter.emit(hero);
    };
    //治疗
    BattlegroundComponent.prototype.onCure = function (hero) {
        this.magic.cure(hero);
        this.log("[" + hero.name + "]\u6062\u590D\u4E86\u4F53\u529B", 1);
    };
    BattlegroundComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.heros.forEach(function (hero) {
                setTimeout(function () {
                    var damage = Math.floor(Math.random() * 100);
                    hero.blood = Math.max(0, hero.blood - damage);
                    _this.log("[" + hero.name + "]\u53D7\u5230 [" + damage + "] \u70B9\u4F24\u5BB3", 0);
                    if (hero.blood === 0) {
                        _this.backEmitter.emit(hero);
                        _this.log("[" + hero.name + "]\u5DF2\u9635\u4EA1", 2);
                    }
                }, Math.random() * 500);
            });
        }, 500);
    };
    //@Output() dead:EventEmitter<Hero> = new EventEmitter<Hero>();
    //kill(){
    //    this.hero.blood = 0;
    //    this.hero.status = HeroStatus.DEAD;
    //    this.dead.emit(this.hero);
    //}
    BattlegroundComponent.prototype.log = function (log, level) {
        var className;
        switch (level) {
            case 0:
                className = 'text-danger';
                break;
            case 1:
                className = 'text-success';
                break;
            case 2:
                className = 'text-muted';
                break;
        }
        var time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        this.logs.unshift("<span class=\"" + className + "\">" + time + "--" + log + "</span>");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BattlegroundComponent.prototype, "heros", void 0);
    __decorate([
        core_1.Output('back'), 
        __metadata('design:type', core_1.EventEmitter)
    ], BattlegroundComponent.prototype, "backEmitter", void 0);
    BattlegroundComponent = __decorate([
        core_1.Component({
            selector: 'battleground',
            template: "\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3>\u91CE\u5916</h3>\n                <hero-detail *ngFor=\"let h of heros\" [hero]=\"h\" (back)=\"onBack($event)\" (cure)=\"onCure($event)\"></hero-detail>\n            </div>\n            <div class=\"col-md-6\">\n                <pre style=\"height: 300px;overflow: auto\">\n                    <div *ngFor=\"let log of logs\" [innerHTML]=\"log\"></div>\n                </pre>\n            </div>\n        </div>\n    ",
            directives: [hero_detail_component_1.HeroDetailComponent],
            providers: [{
                    provide: magic_service_1.MagicService, useFactory: magic_service_1.magicServiceFactory(30)
                }]
        }), 
        __metadata('design:paramtypes', [magic_service_1.MagicService])
    ], BattlegroundComponent);
    return BattlegroundComponent;
}());
exports.BattlegroundComponent = BattlegroundComponent;
//# sourceMappingURL=battleground.component.js.map