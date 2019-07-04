function bold() {
  var ban = document.getElementById("texto").style.fontWeight;
   if (ban == 'normal') {
       document.getElementById("texto").style.fontWeight ="bold";
   }  else {
       document.getElementById("texto").style.fontWeight ="normal";
   } 
}
function italic() {
    var italic = document.getElementById("texto").style.fontStyle;
    if (italic == 'normal'){
        document.getElementById("texto").style.fontStyle="italic";
    } else {
        document.getElementById("texto").style.fontStyle="normal";
    }
}
function underline() {
    document.getElementById("texto").style.textDecoration="underline";
}
var changefont = function(font){
    console.log(font.value)
    document.getElementById("texto").style.fontFamily=font.value;
}
var changesize = function(size){
    console.log(size.value)
    document.getElementById("texto").style.fontSize=size.value;
}