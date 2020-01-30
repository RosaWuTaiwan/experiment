/**
 * Created by Wangfy on 2015/8/11.
 */

function Game(){
    this.isStop = false;
}
Game.prototype = {
    mainloop:function(self){
        if(self.isStop){
            return;
        }
        ctx.clearRect(0,0,canvas.width,canvas.height);
        frameNum++;
        if(frameNum % 20 == 0){
            iconArr.push(new Icon());
            //console.log(iconArr.length);
        }
        for(var i = 0;i<iconArr.length;i++){
            iconArr[i].update();
            if(iconArr[i]){
                iconArr[i].render();
            }
        }

        if(frameNum % 1 == 0){
            hero.update();

        }
        hero.render();
        hero.isEat()

        ctx.font = "30px 微軟正黑體";
        ctx.fillStyle = "red";
        ctx.fillText("分數為："+totle,5,35);

        if(frameNum % FPS == 0){
            time --;
            if(time == 0){
                alert("您的總分為" + totle +"\n加油!");
                window.location.reload();
                self.stop()
            }
        }
        ctx.font = "30px 微軟正黑體";
        ctx.fillStyle = "red";
        ctx.fillText(time+'秒',canvas.width-70,35);
    },
    run: function () {
        var self = this;
        setInterval(self.mainloop,1000/FPS,self)
    },
    stop: function () {
        this.isStop = true;
    },
    start: function () {
        this.isStop = false;
    }
}