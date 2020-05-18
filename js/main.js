"use strict";

class Tv {
    constructor(name, resolution, ratio,color,remote,type){
        this.name = name;
        this.resolution = resolution;
        this.ratio = ratio;
        this.color = color;
        this.hasRemote = remote;
        this.type = type;
        this.turnedOn = false;
        this.channel = '';
        this.volume = 20;
    }
    
    turnOn() {
        if (this.turnedOn){
            console.log(this.name + " jau yra ijungtas");
            return;     
        }
        this.turnedOn = true;
        console.log(this.name + " buvo ijungtas");
    }
    turnOff(){
        if (!this.turnedOn){
            console.log(this.name + " jau yra Isjungtas");
            return;   
        }
        this.turnedOn = false;
        console.log(this.name + " buvo isjungtas");
    }
    changeVolume(levelChange){
        this.volume = this.volume + levelChange;
        if (this.volume > 100){
            this.volume = 100;
        }
        if (this.volume < 0){
            this.volume = 0;
        }
        console.log(this.name +' garsas pasikeite i '+ this.volume+"."); 
    }
    currentVolume(){
        console.log(this.name +' Dabartinis garsas yra '+ this.volume+"."); 
    }
    mute(){
        this.volume = 0;
        console.log(this.name +' Garsas uzmutintas '); 
    }
}


const silelis = new Tv("Silelis",[4000,3000],[4, 3], 'black', false, 'CRT');
console.log(silelis);

const lg = new Tv("lg",[8000,6000],[4,3],'silver',true,'flat');
console.log(lg);

silelis.turnOn();
silelis.turnOff();

lg.turnOn();

lg.changeVolume(-20);
lg.currentVolume();
lg.mute();


