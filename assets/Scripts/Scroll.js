// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       bg1:cc.Node,
       bg2:cc.Node,
       speed:0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bg1.x=-cc.winSize.width/2;
        this.bg2.x=this.bg1.x+this.bg1.width;
    },

    start () {

    },

    update (dt) {
        this.bg1.x-=this.speed*dt;
        this.bg2.x-=this.speed*dt;
        if(this.bg1.x<(-this.bg1.width-cc.winSize.width/2)){
            this.bg1.x=this.bg2.x+this.bg2.width;
        }
        if(this.bg2.x<(-this.bg2.width-cc.winSize.width/2)){
            this.bg2.x=this.bg1.x+this.bg1.width;
        }
    },
});
