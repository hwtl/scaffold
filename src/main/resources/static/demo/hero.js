"use strict";
var Hero = (function () {
    function Hero(name) {
        this.maxHP = 1000;
        this.status = 0; //0:空闲 1:在待命 2:出征 -1死亡
        this.name = name;
        this.blood = 1000;
        this.strength = 10;
    }
    return Hero;
}());
exports.Hero = Hero;
//export enum HeroStatus {
//    ALIVE, DEAD, IDLE
//} 
//# sourceMappingURL=hero.js.map