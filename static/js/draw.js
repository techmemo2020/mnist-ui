var can;
var ct;
var ox=0,oy=0,x=0,y=0;
var mf=false;

function mam_draw_init(){
	//初期設定
	can=document.getElementById("can");
	can.addEventListener("touchstart",onDown,false);
	can.addEventListener("touchmove",onMove,false);
	can.addEventListener("touchend",onUp,false);
	can.addEventListener("mousedown",onMouseDown,false);
	can.addEventListener("mousemove",onMouseMove,false);
	can.addEventListener("mouseup",onMouseUp,false);

	//document.addEventListener("touchstart",StopYure,false);
	//document.addEventListener("touchmove",StopYure,false);
	//document.addEventListener("touchend",StopYure,false);

	//document.addEventListener("mouseup",StopYure,false);
	//document.addEventListener("mousedown",StopYure,false);
	//document.addEventListener("mousemove",StopYure,false);

	ct=can.getContext("2d");
	ct.strokeStyle="#000000";
	ct.lineWidth=5;
	ct.lineJoin="round";
	ct.lineCap="round";
	clearCan();
}

function StopYure(event){
	event.preventDefault();
	event.stopPropagation();
}

function onDown(event){
	mf=true;
	ox=event.touches[0].pageX-event.target.getBoundingClientRect().left-scx();
	oy=event.touches[0].pageY-event.target.getBoundingClientRect().top -scy();
	event.stopPropagation();
}
function onMove(event){
	if(mf){
		x=event.touches[0].pageX-event.target.getBoundingClientRect().left-scx();
		y=event.touches[0].pageY-event.target.getBoundingClientRect().top -scy();
		drawLine();
		ox=x;
		oy=y;
		event.preventDefault();
		event.stopPropagation();
	}
}
function onUp(event){
	mf=false;
	event.stopPropagation();
}

function onMouseDown(event){
	ox=event.clientX-event.target.getBoundingClientRect().left;
	oy=event.clientY-event.target.getBoundingClientRect().top ;
	mf=true;
}
function onMouseMove(event){
	if(mf){
		x=event.clientX-event.target.getBoundingClientRect().left;
		y=event.clientY-event.target.getBoundingClientRect().top ;
		drawLine();
		ox=x;
		oy=y;
	}
}
function onMouseUp(event){
	mf=false;
}

function drawLine(){
	ct.strokeStyle="#000000";
	ct.lineWidth=40;
	ct.lineJoin="round";
	ct.lineCap="round";
	ct.beginPath();
	ct.moveTo(ox,oy);
	ct.lineTo(x,y);
	ct.stroke();
}


function clearCan(){
	ct.fillStyle="rgb(255,255,255)";
	ct.fillRect(0,0,can.getBoundingClientRect().width,can.getBoundingClientRect().height);
}

function savePic(){
	var imgPng=can.toDataURL('image/png');
	imgPng=imgPng.replace(/^data:image\/png;base64,/,'');
	document.getElementById("imgBase64").value=imgPng;
	document.getElementById("fm").submit();
	/*
	var form = document.getElementById("fm");
	form.setAttribute("action","draw.php");
	form.setAttribute("method","POST");
	form.submit();
	*/
}
function scx(){return document.documentElement.scrollLeft || document.body.scrollLeft;}
function scy(){return document.documentElement.scrollTop  || document.body.scrollTop ;}
