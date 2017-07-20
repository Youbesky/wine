$(function(){	
	
//头部导航
$(".column .icon-nav").on('touchend',fnnav);

function fnnav(e){
	e.preventDefault();
	$(".head-nav").toggleClass("active");
}
	


//搜索框
$(".search").on('touchend',fnsearch);
function fnsearch(){
	$(".search-box").toggleClass("active");
}

$(".main-nav .title .moresidebar").on('touchstart',fnshow1);
$(".main-nav .title .moresidebar").on('touchend',fnshow2);

$("#sidebar .title").on('touchend',fnhide);


function fnshow1(){
	$("#sidebar").show();
}

function fnshow2(){
	$("#sidebar").css("transform","translate3d(0, 0, 0)");
}

function fnhide(e){
	e.preventDefault();
	$("#sidebar").css("transform","translate3d("+$("body").width()+ "px,0, 0)");
}








//	脚部导航
var aNav = document.querySelectorAll(".footer-nav a");
var oBtn = document.querySelector(".footer-nav .inf-btn");
var iR = 110;
var off = true;

function toLT(iR,iDeg){
	return {
		l:Math.round(Math.sin(iDeg/180*Math.PI)*iR),
		b:Math.round(Math.cos(iDeg/180*Math.PI)*iR)
	}
}

oBtn.addEventListener("touchend",fnRo,false);
function  fnRo(){
	if(off==true){
		$(".footer-nav .inf-btn").css("-webkit-transform","rotate(0deg)");
		for(var i=0;i<aNav.length;i++){
			var getLT = toLT(iR,90/3*i);
			aNav[i].style.left=getLT.l+'px';
			aNav[i].style.bottom=getLT.b+'px';
			aNav[i].style.webkitTransform='rotate(0deg)';
			aNav[i].style.webkitTransition = "0.6s"
		}
	}
	else{
		$(".footer-nav .inf-btn").css("-webkit-transform","rotate(-45deg)");
		for(var i=0;i<aNav.length;i++){
			var getLT = toLT(iR,90/3*i);
			aNav[i].style.left=0;
			aNav[i].style.bottom=0;
			aNav[i].style.webkitTransform='rotate(-45deg)';
			aNav[i].style.webkitTransition = "0.6s"
		}
	}
	off = !off;
	
}












})
