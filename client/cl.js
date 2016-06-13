//Файл клиента
//Состояния
var clientDia = '';//Диалоговое окно
var clientHp = '';//Здоровье
var clientMp = '';//Мана
var clientXp = '';//Опыт
var clientNm = '';//Ник
var clientDe = '';//Действия
var stats = '';//Действия
var clientMap = '';//Действия
var city = '';//Действия
var povorot = 's';//Действия

var hashMap = '000';
var clientPosition = '';
var clientPositionOld = '';
var pov = 0;
var bbb=0;
var stal=1;
var coordMap='';
var zad = new Array();
//Функции
/*
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

document.getElementById('display').style.width=width+'px';
document.getElementById('display').style.height=height+'px';
document.body.style.overflow='hidden';
*/
mapMap = new Array(
[0,0,0,0,0,1,0,0,0],
[0,0,0,0,0,1,0,0,0],
[0,0,0,0,0,1,1,1,0],
[0,0,0,0,0,0,0,1,0],
[1,1,1,1,1,1,0,1,0],
[0,1,0,0,0,1,0,1,1],
[0,1,0,0,0,1,1,1,0],
[0,1,0,0,0,0,0,0,0],
[0,1,0,0,0,0,0,0,0]);
function tototo(n){
	if(n!=''){
$.get('http://kolonize.ru/ajax.php',{'data':'step','go':n,'hash':hashMap},function(data){if(data!='none'){
poh=data;pohe();
bbb=0;
}});
}
//zad[zad.length]=n;

}

function pohe(){
	st = poh.split('\n');
	hashMap = st[0];
	s = st[1].split(':');
	coordMap = s[0]+'x'+s[1];
	//console.log(st[1]);
clientPositionOld=clientPosition;
	clientPosition = coordMap;
}
function reMap(){
	szx = document.getElementById('bg').offsetWidth;
	szy = document.getElementById('bg').offsetHeight;
	bg = document.getElementById('bg');
	bg.innerHTML='<div id="mapcak"><div tok id="ton" onclick="tototo(\'n\');"></div><div tok id="tos" onclick="tototo(\'s\');"></div><div tok id="tow" onclick="tototo(\'w\');"></div><div tok id="toe" onclick="tototo(\'e\');"></div></div><div id="hero"hero></div>';
rnd = new Array('grass','sand');
for(i=0;i<=8;i++){
for(q=0;q<=8;q++){
bg.innerHTML+='<e '+rnd[mapMap[i][q]]+' a="'+rnd[mapMap[i][q]]+'"></e>';


}
}


e = document.getElementsByTagName('e');
dev = 1;
st = 1;
x = 128;
y = 84;
p = 10;
	my = clientPosition.split(':');



//downy = -x, -y
//downx = -x, +y

yy=0;
xx=0;
mod=2;
for(i=1;i<=my[1];i++){
	xx-=64;
	yy-=32;
}
for(i=1;i<=my[0];i++){
	xx-=64;
	yy+=32;
}
/*
((x-56)*((szx/400)+1))
endy = ((y+128)*((szy/400)+1))+yy;
endx = +xx;


*/

endy = (szy/2)+8+yy;
endx = (szx/2)-x+xx;
for(i=0;i<=80;i++){
type = e[i].getAttribute('a');//type
if(dev==1){endy = endy + y/2-p;
e[i].style.top=endy+'px';
endx = endx + x/2;
e[i].style.left=endx+'px';
}else{
endr=endy+(y/2);
endt=endx-(x/2);

endr -= (y/2)*dev-(dev*p-p);

e[i].style.top=endr+'px';
endt += x/2*dev;
e[i].style.left=endt+'px';
}
e[i].style.zIndex=(10-dev)*st;
if(dev==9){st++;dev=1;}else
dev++;

}
}


function spl(){

	st = stats.split('\n');
	//0-map,1-pers,2-city,3-my
	my = st[3].split(':');

	clientHp = st[5];
	clientMp = st[6];
	clientMap = st[0].split(',');
//	clientPerson = st[4].split(' ');
	clientPosition = my[0]+':'+my[1];
	pov = my[2];
	clientNm=my[3];
	hashMap = st[4];

	var t=1;
	tt=0;
for(i=0;i<=8;i++){
for(q=0;q<=8;q++){
//bg.innerHTML+='<e '+rnd[mp[i][q]]+' a="'+rnd[mp[i][q]]+'"></e>';
//c=(i+1)*(q+1);
mapMap[i][q]=clientMap[tt];
tt++;
}
}
bg = document.getElementById('bg');
bg.innerHTML='';
rnd = new Array('grass','sand');
for(i=0;i<=8;i++){
for(q=0;q<=8;q++){
bg.innerHTML+='<e '+rnd[mapMap[i][q]]+' a="'+rnd[mapMap[i][q]]+'"></e>';
}
}




clientPerson='';
reMap();

//document.getElementById('mapcak').style.top=($("#mapcak").height-$("#bg").height)/2;
//document.getElementById('mapcak').style.left=($("#mapcak").width-$("#bg").width)/2;

document.getElementById('hero').style.background="url(http://furious-corpses.github.io/client/"+pov+".png)";



if(clientNm!=''){
document.getElementById('heroname').innerHTML=clientNm;
}

}
function zadva(){
em = '';
for(i=0;i<=zad.length;i++){
	if(zad[i]!=''){
		em=zad[i];
		zad[i]='';
	break;
	}
}
if(em!=''){	$.get('http://kolonize.ru/ajax.php',{'data':'step','go':em,'hash':hashMap},function(data){if(data!='none'){
poh=data;pohe();
pov = 2;
bbb=0;
}});
}
}


//Запросы
$('#map').ready(function(){setInterval(function(){$.get('http://kolonize.ru/ajax.php',{'data':'stats'},function(data){if(data!='none'){stats = data; spl();}});},1000);});
/*
var $el = $("#map");
var elHeight = $el.height();
var elWidth = $el.width();
var $wrapper = $("body");
*/


//Исполнение
//setInterval(function(){$('#hp').css('width',clientHp+'%');$('#mp').css('width',clientMp+'%');}, 500);
