/*var ele = document.getElementsByClassName('loadingbox');
//document.getElementsByClassName('test')
*/
window.onload = firstscript;
function firstscript() {
//document.getElementsByClassName("loadingbox").style.display ="none";

}
/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
window.onload = function(){
    document.getElementById("loadingbox").style.display = "none";
    document.getElementById("fadescale").style.display = "block";
    document.getElementById("fadescale").classList.add("scale0none");
//var element = document.getElementsByClassName("loadingbox");
//var array = Array.prototype.slice.call(element);//配列に変換
//for(var i = 0;i < element.length;i++){
//        element[i].style.display = "none";
//}

}
//    const list = document.getElementsByClassName('loadingbox');
//    alert(list.length);  // 2
