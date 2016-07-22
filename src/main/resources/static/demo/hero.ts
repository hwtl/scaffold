export class Hero {
    constructor(name:string) {
        this.name = name;
        this.blood = 1000;
        this.strength = 10;
    }
    maxHP:number = 1000;
    name:string;//名字
    blood:number;//血量
    strength: number;//伤害值
    status:number = 0; //0:空闲 1:在待命 2:出征 -1死亡

}

//export enum HeroStatus {
//    ALIVE, DEAD, IDLE
//}