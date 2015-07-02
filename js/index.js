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
