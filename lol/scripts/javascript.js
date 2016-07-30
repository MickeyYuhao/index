//动画轮播
var x = 0;
var timer;
$('#news .left .t-box span:eq('+x+')').css('background','#D62D00');
function myplay(){
	timer = setInterval(function(){	
		x++
		if(x>$('#news .left ul li').length-1) x=0;
		goTo(x);
	},2000)
}
myplay()

function goTo(obj){
	for(var i=0;i<$('#news .left ul li').length;i++){
		if(obj==i){
			$('#news .left ul li:eq('+obj+')').fadeIn(0);
			$('#news .left .t-box span:eq('+obj+')').css('background','#D62D00');

		}else{
			$('#news .left ul li:eq('+i+')').fadeOut(0);
			$('#news .left .t-box span:eq('+i+')').css('background','rgba(4,3,3,0.9)');
		}
	}
}

$('#news .left').mouseover(function(){
	clearInterval(timer);
})
$('#news .left').mouseout(function(){
	myplay();
})

for(var i=0;i<$('#news .left .t-box span').length;i++){
	$('#news .left .t-box span:eq('+i+')').attr('index',i);
	$('#news .left .t-box span:eq('+i+')').mouseover(function(){
		goTo(this.getAttribute('index'));
		x = this.getAttribute('index');
	})
}
// 动画轮播结束

//公告选项卡
$('#news .right #first .first:eq(0)').css('display','block');
for(var i=0;i<$('#news .right .title ul li').length;i++){
	$('#news .right .title ul li:eq('+i+')').attr('index',i);
	$('#news .right .title ul li:eq('+i+')').mouseover(function(){
		for(var i=0;i<$('#news .right #first .first').length;i++){
			$('#news .right #first .first:eq('+i+')').css('display','none');
			$('#news .right #first .first:eq('+this.getAttribute('index')+')').css('display','block');
		}
	})
}
$('#news .right .title ul li').eq(0).css('backgroundPosition','-485px -111px');
$('#news .right .title ul li').eq(0).mouseover(function(){
	$('#news .right .title ul li').eq(0).css('backgroundPosition','-485px -111px');
	$('#news .right .title ul li').eq(1).css('backgroundPosition','-387px -111px');
	$('#news .right .title ul li').eq(2).css('backgroundPosition','-387px -155px');
	$('#news .right .title ul li').eq(3).css('backgroundPosition','-485px -67px');
})
$('#news .right .title ul li').eq(1).mouseover(function(){
	$('#news .right .title ul li').eq(0).css('backgroundPosition','-387px -67px');
	$('#news .right .title ul li').eq(1).css('backgroundPosition','-485px -155px');
	$('#news .right .title ul li').eq(2).css('backgroundPosition','-387px -155px');
	$('#news .right .title ul li').eq(3).css('backgroundPosition','-485px -67px');
})
$('#news .right .title ul li').eq(2).mouseover(function(){
	$('#news .right .title ul li').eq(0).css('backgroundPosition','-387px -67px');
	$('#news .right .title ul li').eq(1).css('backgroundPosition','-387px -111px');
	$('#news .right .title ul li').eq(2).css('backgroundPosition','-517px -0px');
	$('#news .right .title ul li').eq(3).css('backgroundPosition','-485px -67px');
})
$('#news .right .title ul li').eq(3).mouseover(function(){
	$('#news .right .title ul li').eq(0).css('backgroundPosition','-387px -67px');
	$('#news .right .title ul li').eq(1).css('backgroundPosition','-387px -111px');
	$('#news .right .title ul li').eq(2).css('backgroundPosition','-387px -155px');
	$('#news .right .title ul li').eq(3).css('backgroundPosition','-583px -44px');
})
// 公告选项卡结束

//视频选项卡
$('#information .video .main .resource:eq(0)').css('display','block');
$('#information .video .main .title li:eq(0)').css({'border-top':'4px solid #00A383','background':'#FFF','color':'#00A383'})
for(var i=0;i<$('#information .video .main .title li').length;i++){
	$('#information .video .main .title li:eq('+i+')').attr('index',i);
	$('#information .video .main .title li:eq('+i+')').mouseover(function(){
		for(var i=0;i<$('#information .video .main .resource').length;i++){
			$('#information .video .main .title li:eq('+i+')').css({'border-top':'4px solid #D7D7D7','background':'#F0F0F0','color':'#525252'});
			$('#information .video .main .title li:eq('+this.getAttribute('index')+')').css({'border-top':'4px solid #00A383','background':'#FFF','color':'#00A383'});
			$('#information .video .main .resource:eq('+i+')').css('display','none');
			$('#information .video .main .resource:eq('+this.getAttribute('index')+')').css('display','block');
		}
	})
}
//视频选项卡结束
//赛事选项卡
$('#match .game .main .body:eq(0)').css('display','block');
$('#match .game .main .title li:eq(0)').css({'border-top':'4px solid #00A383','background':'#FFF','color':'#00A383'})
for(var i=0;i<$('#match .game .main .title li').length;i++){
	$('#match .game .main .title li:eq('+i+')').attr('index',i);
	$('#match .game .main .title li:eq('+i+')').mouseover(function(){
		for(var i=0;i<$('#match .game .main .body').length;i++){
			$('#match .game .main .title li:eq('+i+')').css({'border-top':'4px solid #D7D7D7','background':'#F0F0F0','color':'#525252'});
			$('#match .game .main .title li:eq('+this.getAttribute('index')+')').css({'border-top':'4px solid #00A383','background':'#FFF','color':'#00A383'});
			$('#match .game .main .body:eq('+i+')').css('display','none');
			$('#match .game .main .body:eq('+this.getAttribute('index')+')').css('display','block');
		}
	})
}
// 赛事选项卡结束

//模式选项信息查询
var bj=true;
$('#match .war .mode li #a').click(function(){
	$('#match .war .mode .details1').css({'display':'block'});
	$('#match .war .mode .details2').css({'display':'none'});
	bj = true;
})
$('#match .war .mode li #b').click(function(){
	$('#match .war .mode .details2').css({'display':'block'});
	$('#match .war .mode .details1').css({'display':'none'});
	bj = false;
})
	//数据信息随机数
for(var i=0;i<$('#match .war .mode .details .small').length;i++){
	var sW = Math.floor(Math.random()*46);
	$('#match .war .mode .details .small').eq(i).css({'width':sW+'px'});
}
$('#match .war .mode .free input').click(function(){
	for(var i=0;i<$('#match .war .mode .details .small').length;i++){
		var sW = Math.floor(Math.random()*46);
		$('#match .war .mode .details .small').eq(i).css({'width':sW+'px'});
	}
	$('#match .war .mode #detailbox').animate({'width':'0px','height':'0px'},10);
	$('#match .war .mode #detailbox').animate({'width':'350px','height':'120px'},300);
})
	// 下拉框更改选项更换查询数据
var moVal = $('#match .war .mode li #c').val();
$('#match .war .mode li #c option').click(function(){
	var dqVal = $('#match .war .mode li #c').val();
	if(dqVal != moVal){
		if(bj){
			$('#match .war .mode .details2').css({'display':'block'});
			$('#match .war .mode .details1').css({'display':'none'});
			bj = false;
			moVal = dqVal;
		}else{
			$('#match .war .mode .details1').css({'display':'block'});
			$('#match .war .mode .details2').css({'display':'none'});
			bj = true;
			moVal = dqVal;
		}
	}
})
//模式选项信息查询结束

// 自主服务选项卡
$('#match .kefu .nav ul li').eq(0).css({'background':'#FFF','borderRight':'1px solid #CFCFCF','color':'#000'});
$('#match .kefu .nav ul li').eq(0).mouseover(function(){
	$('#match .kefu .nav ul li').eq(0).css({'background':'#FFF','borderRight':'1px solid #CFCFCF','color':'#000'});
	$('#match .kefu .nav ul li').eq(1).css({'background':'none','border':'none','color':'#666'});
	$('#match .kefu .box1').css({'display':'block'});
	$('#match .kefu .box2').css({'display':'none'});
})
$('#match .kefu .nav ul li').eq(1).mouseover(function(){
	$('#match .kefu .nav ul li').eq(1).css({'background':'#FFF','borderRight':'1px solid #CFCFCF','borderLeft':'1px solid #CFCFCF','color':'#000'});
	$('#match .kefu .nav ul li').eq(0).css({'background':'none','border':'none','color':'#666'});
	$('#match .kefu .box1').css({'display':'none'});
	$('#match .kefu .box2').css({'display':'block'});
})
// 自主服务选项卡结束

// 右侧二维码随滚动移动
// var lolewmTop = $('#lolewm').offset();
// setInterval(function(){
// 	var wTop = $(window).scrollTop();
// 	$('#lolewm').css({top:lolewmTop.top+wTop+'px'});
// },1)
$('#lolewm').hover(function(){
	$('#lolewm a').css({'color':'#00A383'});
},function(){
	$('#lolewm a').css({'color':'#9F9F9F'});
})
// 右侧二维码随滚动移动结束
