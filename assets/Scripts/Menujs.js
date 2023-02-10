

cc.Class({
    extends: cc.Component,

    properties: {
        logoN:cc.Node,
        btnStartN:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.logoN.getComponent(cc.Animation).on("finished",this.finish,this);

    },
    start(){
        cc.tween(this.logoN)
        .by(1,{y:-200})
        .call(()=>{
            cc.tween(this.logoN)
            .repeatForever(cc.tween(this.logoN).to(1,{angle:10}).to(2,{angle:-20}))
            .start()
        })
        .start()
    },
    finish(){
       this.logoN.getComponent(cc.Animation).play("logoSwing");
        this.btnStartN.getComponent(cc.Animation).play();
    },
    
    enterGame(){
        cc.director.loadScene("GameScene");
    },

    

    // update (dt) {},
});
