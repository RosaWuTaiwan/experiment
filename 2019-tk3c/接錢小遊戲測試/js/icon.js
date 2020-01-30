/**
 * Created by Wangfy on 2015/8/11.
 */

function Icon(){
    var dictionary = iconsTypeArr[_.random(0,iconsTypeArr.length-1)];

    for(var k in dictionary){
        this[k] = dictionary[k];
    }
    this.image = iconImgArr[0];
    this.x = _.random(0,canvas.width - this.w)
    this.y = 0;
    this.isEat = false;
}

Icon.prototype = {
    update: function () {
        this.y += this.speed;
        //console.log(canvas.height)

        if(this.y > canvas.height){
            iconArr = _.without(iconArr,this);
        }
        if(this.isEat){
            iconArr = _.without(iconArr,this);
        }
    },
    render: function () {
        ctx.drawImage(this.image,this.imgx,this.imgy,this.w,this.h,this.x,this.y,this.w,this.h)
    },
    eat: function () {
        this.isEat = true;
    }
}