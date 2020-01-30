/**
 * Created by Wangfy on 2015/8/11.
 */

function Icon(){
    var dictionary = iconsTypeArr[_.random(0,iconsTypeArr.length-1)];
    for(var k in dictionary){
        this[k] = dictionary[k];
        //console.log('this[k]:'+this[k]);
    }
    this.image = iconImgArr[0];
    this.x = _.random(0,canvas.width - this.w) //隨機產生的x軸位置
    this.y = 0;
    this.isEat = false;
}

Icon.prototype = {
    update: function () {
        this.y += this.speed;
        // console.log('canvas.height:'+canvas.height);
        // console.log('this.y:'+this.y);
        // console.log('this.speed:'+this.speed);

        if(this.y > canvas.height){
            iconArr = _.without(iconArr,this);
            console.log('this.y > canvas.height的iconArr:'+iconArr);
        }
        if(this.isEat){
            iconArr = _.without(iconArr,this);
            console.log('this.isEat的iconArr:'+iconArr);
        }
    },
    render: function () {
        ctx.drawImage(this.image,this.imgx,this.imgy,this.w,this.h,this.x,this.y,this.w,this.h)
    },
    eat: function () {
        this.isEat = true;
    }
}