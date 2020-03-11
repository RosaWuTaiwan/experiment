let Progress = function(init){
    this.init(init)
};
Progress.prototype= {
    init:function (init) {

        this.el = init.el;//��蝝狢D

        let cvsElement = document.getElementById(this.el),//�繮��硋��蝝�
            ctx=cvsElement.getContext("2d"),//�繮��𣇉𤫇蝚�
            width = cvsElement.width,//��蝝惩捐摨�
            height=cvsElement.height,//��蝝𣳇�睃漲
            degActive=0,//�𢆡��蝥踵辺
            timer=null;//摰𡁏𧒄�膥
        
        //�𨀣迫�𧒄��閫鍦漲
        init.deg>0&&init.deg<=100?
            this.deg = init.deg:this.deg = 100;
        
        //蝥踹捐
        init.lineWidth !== undefined?
            this.lineWidth = init.lineWidth : this.lineWidth =20;

        //�ế�鱏摰賡�䁅�撠讛��
        this.wh = width>height?height:width;

        //霈曄蔭������𠰴�嚗屸�䁅恕銝箏捐擃䁅�撠讛��
        init.circleRadius>0&&init.circleRadius<=this.wh/2-this.lineWidth/2?
            this.circleRadius = init.circleRadius:this.circleRadius = this.wh/2-this.lineWidth/2;

        //蝏睃�蝥輻��峕艶憸𡏭𠧧
        init.lineBgColor !==undefined?
            this.lineBgColor = init.lineBgColor:this.lineBgColor='#ccc';

        //蝏睃�蝥輻�憸𡏭𠧧
        init.lineColor !==undefined?
            this.lineColor = init.lineColor:this.lineColor='#009ee5';

        //蝏睃�����烾�𡏭𠧧
        init.textColor !==undefined?
            this.textColor = init.textColor:this.textColor='#009ee5';

        //蝏睃�����堒之撠�
        init.fontSize !==undefined?
            this.fontSize = init.fontSize:this.fontSize=parseInt(this.circleRadius/2);

        //��銵峕𧒄�𡢿
        this.timer = init.timer;

        //皜��膄�𣈲朣�
        if (window.devicePixelRatio) {
            cvsElement.style.width = width + "px";
            cvsElement.style.height = height + "px";
            cvsElement.height = height * window.devicePixelRatio;
            cvsElement.width = width * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        //霈曄蔭蝥踹捐
        ctx.lineWidth=this.lineWidth;

        //�鍳�𢆡摰𡁏𧒄�膥
        timer = setInterval(function(){
            ctx.clearRect(0,0,width,height);//皜��膄�𤫇撣�
            ctx.beginPath();//撘�憪讠�睃�摨訫�
            ctx.arc(width/2,height/2,this.circleRadius,1,8);
            ctx.strokeStyle=this.lineBgColor;
            ctx.stroke();
            ctx.beginPath();//撘�憪讠�睃��𢆡����
            ctx.arc(width/2,height/2,this.circleRadius,-Math.PI/2,degActive*Math.PI/180-Math.PI/2);
            ctx.strokeStyle=this.lineColor;
            ctx.stroke();
            let txt=(parseInt(degActive*100/360)+"%");//�繮��𣇉蓡��瘥�
            ctx.font=this.fontSize+"px SimHei";
            let w=ctx.measureText(txt).width;//�繮��𡝗��𧋦摰賢漲
            let h=this.fontSize/2;
            ctx.fillStyle=this.textColor;
            ctx.fillText(txt,width/2-w/2,height/2+h/2);
            if(degActive>=this.deg/100*360){//�𨀣迫摰𡁏𧒄�膥
                clearInterval(timer);
                timer=null;
            }
            degActive++;
        }.bind(this),this.timer);
    }
 };