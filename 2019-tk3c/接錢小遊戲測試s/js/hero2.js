//�𠜎�繞簪���
function Hero(x){
    this.x = x;
    this._dir=0;

    this.sourcePicX=0;
    this.sourcePicY=0;

    this.w =80;
    this.h =90;

    this._image = new Image();
    this._image.src = "images/jie-s.png";

}

//�碍倥懚�
Hero.prototype = {
    update : function(){
        this.x+=this._dir;
        if(this.x <=0){
            this.x =0;
        }else if(this.x > canvas.width-this.w){
            this.x =canvas.width-this.w;
        }
    },
    render : function(){
        ctx.drawImage(this._image,this.sourcePicX,this.sourcePicY,this.w,this.h,this.x,
            canvas.height-this.h,this.w,this.h)
    },
    setDir:function(i){
        this._dir=i;
    }
    ,isEat:function(){
        console.log(iconArr.length);
        for(var i =0;i<iconArr.length;i++){
            thisIcon = iconArr[i];
            //alert(thisIcon)
            console.log("score"+thisIcon.score);
            console.log("x"+thisIcon.x);
            console.log("y"+thisIcon.y);
            var xd =parseInt(this.x )+parseInt(this.w)
            var xy =canvas.height-this.h
            console.log(xd);
            if(thisIcon.x>=this.x &&thisIcon.x<=xd &thisIcon.y>=xy){
               // alert(11)
                iconArr[i].eat();
                totle+=iconArr[i].score;
                eat.load();
                eat.play();
            }

        }
    }
}
var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
 
    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
 
        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
 
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
 
        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                hero.setDir(0);
                break;
            case 1:
                    hero.setDir(0);
                break;
            case 2:
                    hero.setDir(0);
                break;
            case 3:
                hero.setDir(-3);
                hero.sourcePicX=80;
                break;
            case 4:
                hero.setDir(3);
                hero.sourcePicX=0;
                break;
            default:
                    hero.setDir(0);
                    break;
        }
    }, false);













// document.onkeydown=function(e){
//     var e = event || e;
//     //console.log(e.keyCode)
//     if(e && e.keyCode==37){ // left
//         hero.setDir(-3);
//         hero.sourcePicX=125;
//     }
//     else if(e && e.keyCode==39){ // right
//         hero.setDir(3);
//         hero.sourcePicX=0;
//     }
//     else if(e && e.keyCode==32){ // space
//         hero.setDir(0);
//     }

// };

