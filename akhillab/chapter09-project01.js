function myFuncBlurA(){
var title=document.getElementById("title");
title.classList.remove("highlightable");
}
function myFuncBlurB(){
var descript=document.getElementById("description");
descript.classList.remove("highlightable");
}


function myFuncFocusA(){
var title=document.getElementById("title");
title.classList.add("highlightable");
title.classList.remove("error");
}

function preventDefault(){
var title=document.getElementById("title");
var descript=document.getElementById("description");
var medi=document.getElementById("medium");
var year=document.getElementById("year");
var museu=document.getElementById("museum");

if(title.value==""){
title.classList.add("error");
}
else{
title.classList.remove("error");
}
if(descript.value==""){
descript.classList.add("error");
}
else{
descript.classList.remove("error");
}


return(false);
}
function logSubmit(handler){
handler.preventDefault();
}











