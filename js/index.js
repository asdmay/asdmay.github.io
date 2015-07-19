// document.write("初めてjsから文章を出力しているよ");
// document.bgColor = "yellow";
// document.fgColor = "blue";
// var message;
// message = "こんにちわ";


// var age;
// age = 21;
// document.write(message+"<br>");
// document.write("<h1>私の年齢は"+age+"です</h1>");
// document.bgColor = "yellow";
// document.fgColor = "blue";

// var height;
// var refheight = 160;
// height = prompt("身長を入力してください",160);
// document.write("あなたの身長が"+height+"ってことは<br>");

// if (height >= refheight){
//     document.write("私より背が高いですね");
// }else{
//     document.write("ふーん");
// }

// var month;
// month = prompt("今月は何月ですか？",1);
// month = Number(month);

// switch(month){
// case 1:
//     document.write("睦月");
//     break;
// case 2:
//     document.write("如月");
//     break;
// case 3:
//     document.write("弥生");
//     break;
// case 4:
//     document.write("卯月");
//     break;
// case 5:
//     document.write("皐月");
//     break;
// case 6:
//     document.write("水無月");
//     break;
// case 7:
//     document.write("文月");
//     break;
// case 8:
//     document.write("葉月");
//     break;
// case 9:
//     document.write("長月");
//     break;
// case 10:
//     document.write("神無月");
//     break;
// case 11:
//     document.write("霜月");
//     break;
// case 12:
//     document.write("師走");
//     break;
// default:
//     document.write("ちゃんとして！");
// }

// var MAX = 8;
// var i = 1;
// while(i <= MAX){
//     document.write(i);
//     document.write("西暦", 1988 + i ,"年<br>");
//     i++;
// }

// var ans = 17;
// var num;
// var msg = "好きな数字を入力して下さい";

// while(true){
//     num = prompt(msg, 0);
//     if(ans == num){
// 	document.write("正解");
// 	break;
//     }
    
//     if(ans > num){
// 	msg = "もっと大きい数字に変えて";
//     }else if(ans < num){
// 	msg = "もっと小さい数字に変えて";
//     }else{
// 	document.write("数字を入力して下さい");
//     }
// }

// function dollToyen(doll, rate){
//     var yen;
//     yen = doll * rate;
//     return yen;
// }

// var yen1 = dollToyen(100, 90);
// document.write(yen1+ "円");

// var doll2 = 500;
// var rate2 = 80;

// var yen2 = dollToyen(doll2, rate2);
// document.write(yen2+"円");

// function testFunc(){
   // var num;
    // num = 5;
//}

// var num = 3;
// testFunc();
// document.write(num);

// var now;
// now = new Date();
// document.write(now.toString());

// var aDay;
// aDay = new Date(1993, 11, 9, 12, 12, 0);
// document.write(aDay.toString(),"<br>");

// var  diff, days;
// document.write(now.getFullYear() +"年"
// 	       + (now.getMonth()+1) +"月"
// 	       + now.getDate() +"日");
// diff = now.getTime() - aDay.getTime();
// days = Math.ceil(diff/(24 * 60 * 60 * 1000));
// document.write(days);

// var num = Math.max(78, 92, 14, 27, 88);
// document.write(Math.max(78, 92, 14, 27, 88));
// document.write(Math.min(78, 92, 14, 27, 88));

// var random = Math.random();
// if(random < 0.33){
//     document.write("大吉");
// }else if(random < 0.66){
//     document.write("吉");
// }else{
//     document.write("凶");
// }

// var str = new String("たのしいJavaScript");
// document.write(str,str.length);
// for(var i = 0; i <= (str.length - 1); i++){
//     document.write(str.charAt(i),"<br>");
// }
// var url = "http://www.yahoo.co.jp";
// var text ="yahoo".link(url) + "で検索";
// document.write(text);

// var names;
// names = new Array(4);
// names[0] = "山田太郎";
// names[1] = "中山一郎";
// names[2] = "井上花子";
// names[3] = "江藤さくら";

// for(var i = 0; i < (names.length); i++){
//     document.write(names[i]);
// }

// var days = new Array(7);
// days[0] = "月";
// days[1] = "火";
// days[2] = "水";
// days[3] = "木";
// days[4] = "金";
// days[5] = "土";
// days[6] = "日";

// var date = new Date();
// var day = days[6-date.getDay()];
// document.write(day);

// function compare(a, b){
//     return a - b;
// }

// var ages = new Array(4, 2, 59, 28, 16, 33);
// ages = ages.sort(compare);
// document.write(ages.join("<"));
		 
// var members = new Object();
// members["A001"] = "山田太郎";
// members["A002"] = "中山一郎";
// members["A003"] = "井上花子";
// members["A004"] = "江藤さくら";

// for(var number in members ){
//     document.write(number+" "+members[number], "<br>");
// }

// var data = [3, 4, 1, 5, 9, 2, 3, 8, 10];
// data = data.sort();
// document.write(data);

// for(var prop in navigator){
//     document.write(prop, +" "+navigator[prop],"<br>");
// }

// var platform = navigator.platform;

// if(platform.indexOf("Mac") >= 0){
//     document.write("まかー");
// }else if(platform.indexOf("Win") >= 0){
//     document.write("うぃんでゅー");
// }else{
//     document.write("????");
// }

// function func(str){
//     alert(str + "おしたー");
// }

// function stdWeight(myForm){
//     var height, weight;
//     height = Number(myForm.height.value);
//     if(myForm.sex[0].checked){
// 	weight = (height - 80) * 0.7;
//     }else{
// 	weight = (height - 70) * 0.6;
//     }
//     myForm.weight.value = weight;
// }

function openYahoo(){
    var win = window.open("http://www.yahoo.co.jp", "");
}

// function openImg(){
//     var open = window.open("", "", " width=600, height=800");
//     win.document.open();
//     win.document.write("<img src='img/img1.png'>");
//     win.document.write("<form>");
//     win.document.write('<input type ="button", value ="閉じる"');
//     win.document.write('onclick="window.close()">');
//     win.documemt.write("</form>");
//     win.document.close();
// }

var hourBox, minBox, secBox;
var timer;
function init(){
    hourBox = document.clockForm.hour;
    minBox = document.clockForm.minite;
    secBox = document.clockForm.second;
    dClock();
}
window.onload = init;//()はいらない。関数をオブジェクトとして扱うから

function dClock(){
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;//見栄えのため

    hourBox.value = hour;
    minBox.value = min;
    secBox.value = sec;
    timer = setTimeout("dClock()", 1000);
}

function stopTimer(){
    timer = clearTimeout(timer);
}

var num = 1;
function changeImg(){
    document.myImg.src ="img/img" + num + ".png";
    num++;
    if(num == 3) num = 1;
}

function Person(name,height){
    this.name = name;
    this.height = height;
}

var friends = new Array(3);
friends[0]= new Person("田中太郎",175);
friends[1]= new Person("鈴木花子",160);
friends[2]= new Person("高橋次郎",180);



function calcWeight(){
    var weight;
    weight = (this.height - 100) * 0.9;
    return weight;
}

Person.prototype.stdWeight = calcWeight;

for(var i = 0; i <= friends.length - 1; i++){
    document.write(friends[i].name, friends[i].height, "cm", "<br>");
    document.write(friends[i].stdWeight(), "kg", "<br>");
}
