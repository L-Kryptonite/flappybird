
cc.Class({
    extends: cc.Component,

    properties: {
        pipe:cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(this.creatorPipe,3);
    },
    
    start () {

    },
    creatorPipe(){
        let pipeN=cc.instantiate(this.pipe);
        pipeN.parent=this.node;
    },

    // update (dt) {},
});
