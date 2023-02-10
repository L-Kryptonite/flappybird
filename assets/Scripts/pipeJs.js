

cc.Class({
    extends: cc.Component,

    properties: {
        //pipeN:cc.Node,
        upPipeN:cc.Node,
        bottomPipeN:cc.Node,
        maxPipeY:0,
        minPipeY:0,
        maxDist:0,
        minDist:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.x=cc.winSize.width/2+this.upPipeN.width/2;

        this.upPipeN.y=Math.random()*(this.maxPipeY-this.minPipeY)+this.minPipeY;
        this.Dist=Math.random()*(this.maxDist-this.minDist)+this.minDist;
        this.bottomPipeN.y=this.upPipeN.y-this.Dist;
    },

    getDist(){
        return this.Dist;
    },

    start () {
        this.pipeMove();
    },

    pipeMove(){
        cc.tween(this.node)
        .by(3,{x:-cc.winSize.width-this.upPipeN.width})
        .start()
    },

    // update (dt) {},
});
