// document.write("初めてjsから文章を出力しているよ");
// document.bgColor = "yellow";
// document.fgColor = "blue";
var message;
message = "こんにちわ";


var age;
age = 21;
document.write(message+"<br>");
document.write("<h1>私の年齢は"+age+"です</h1>");
// document.bgColor = "yellow";
// document.fgColor = "blue";

var height;
var refheight = 160;
height = prompt("身長を入力してください",160);
document.write("あなたの身長が"+height+"ってことは<br>");

if (height >= refheight){
    document.write("私より背が高いですね");
}else{
    document.write("ふーん");
}

var month;
month = prompt("今月は何月ですか？",1);
month = Number(month);

switch(month){
case 1:
    document.write("睦月");
    break;
case 2:
    document.write("如月");
    break;
case 3:
    document.write("弥生");
    break;
case 4:
    document.write("卯月");
    break;
case 5:
    document.write("皐月");
    break;
case 6:
    document.write("水無月");
    break;
case 7:
    document.write("文月");
    break;
case 8:
    document.write("葉月");
    break;
case 9:
    document.write("長月");
    break;
case 10:
    document.write("神無月");
    break;
case 11:
    document.write("霜月");
    break;
case 12:
    document.write("師走");
    break;
default:
    document.write("ちゃんとして！");
}

var MAX = 8;
var i = 1;
while(i <= MAX){
    document.write(i);
    document.write("西暦", 1988 + i ,"年<br>");
    i++;
}

var ans = 17;
var num;
var msg = "好きな数字を入力して下さい";

while(true){
    num = prompt(msg, 0);
    if(ans == num){
	document.write("正解");
	break;
    }
    
    if(ans > num){
	msg = "もっと大きい数字に変えて";
    }else if(ans < num){
	msg = "もっと小さい数字に変えて";
    }else{
	document.write("数字を入力して下さい");
    }
}

function dollToyen(doll, rate){
    var yen;
    yen = doll * rate;
    return yen;
}

var yen1 = dollToyen(100, 90);
document.write(yen1+ "円");

var doll2 = 500;
var rate2 = 80;

var yen2 = dollToyen(doll2, rate2);
document.write(yen2+"円");

function testFunc(){
   // var num;
    num = 5;
}

var num = 3;
testFunc();
document.write(num);
