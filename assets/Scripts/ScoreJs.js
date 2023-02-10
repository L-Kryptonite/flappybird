

cc.Class({
    extends: cc.Component,

    properties: {
       maxLabel:cc.Label,
       curLabel:cc.Label,
       scoreNum:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.scoreNum=0;
        let scoreNum=cc.sys.localStorage.getItem("score");
        if(scoreNum==undefined||scoreNum==null){
            this.maxLabel.string=0;
        }else{
            this.maxLabel.string=scoreNum;
        }
        this.curLabel.string=0;
    },
    addScore(){
        this.scoreNum++;
        this.curLabel.string=this.scoreNum;
    },

    updateHistoryScore(){
        let historyScore=cc.sys.localStorage.getItem("score");
        if(historyScore==undefined||historyScore==null){
            cc.sys.localStorage.setItem("score",this.scoreNum);
        }else{
            if(this.scoreNum>historyScore){
                cc.sys.localStorage.setItem("score",this.scoreNum);
            }
        }
    },
    start () {

    },

    // update (dt) {},
});
