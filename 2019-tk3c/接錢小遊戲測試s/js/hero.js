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
        //console.log(iconArr.length);
        for(var i =0;i<iconArr.length;i++){
            thisIcon = iconArr[i];
            //alert(thisIcon)
            //console.log("thisIcon"+thisIcon);
            // console.log("生出來的金幣score"+thisIcon.score);
            // console.log("生出來的金幣x"+thisIcon.x);
            // console.log("生出來的金幣y"+thisIcon.y);
            var xd =parseInt(this.x )+parseInt(this.w)
            var xy =canvas.height-this.h
            // console.log("parseInt(this.x ):"+parseInt(this.x ));
            // console.log("parseInt(this.w):"+parseInt(this.w));
            // console.log("this.h:"+this.h);
            // console.log("xd:"+xd);
            // console.log("xy:"+xy);
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


document.onkeydown=function(e){
    var e = event || e;
    //console.log(e.keyCode)
    if(e && e.keyCode==37){ // left
        hero.setDir(-3);
        hero.sourcePicX=80;
    }
    else if(e && e.keyCode==39){ // right
        hero.setDir(3);
        hero.sourcePicX=0;
    }
    else if(e && e.keyCode==32){ // space
        hero.setDir(0);
    }

};

