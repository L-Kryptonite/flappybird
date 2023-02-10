// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed:0,
        accel:0,
        touchN:cc.Node,
        scoreMgr:cc.Node,
        HP:cc.ProgressBar,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.touchN.on("touchstart",this.playerUp,this);
    },
    playerUp(){
        this.speed=-200;
    },
    start () {

    },

    update (dt) {
        this.speed+=this.accel*dt;
        this.node.y-=this.speed*dt;
    },

    reducePlayerY(pipeN){
        let Dist=pipeN.parent.getComponent("pipeJs").getDist();
        if(pipeN.name=="top_pipe"){
            this.node.y=pipeN.y-Dist/2;
        }else{
            this.node.y=pipeN.y+Dist/2;
        }
        this.speed=0;
    },

    onCollisionEnter(other,self){
       // console.log(other.tag);
        if(other.tag==1){
            console.log("碰到钢管");
            this.HP.progress-=0.2;
            this.reducePlayerY(other.node);
            if(this.HP.progress<=0){
                this.scoreMgr.getComponent("ScoreJs").updateHistoryScore();
                cc.director.loadScene("Over");
            }
           
        }else if(other.tag==2){
           
                this.scoreMgr.getComponent("ScoreJs").addScore();
            
        }
        
    }
});
