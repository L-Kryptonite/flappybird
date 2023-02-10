

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var manager =cc.director.getCollisionManager();
        manager.enabled=true;
       // manager.enabledDebugDraw = true;
        
       
    },

    start () {

    },

    // update (dt) {},
});
