
function ncheck(){
var nc,nv;
nc=document.getElementById("n").value;
nv=/^[a-zA-Z ]+$/;
nc=nc.trim();
if(!nc.match(nv)||nc.lenght==0){
document.getElementById("sp").innerHTML="***name check ***";
return 'n';
}
else{
document.getElementById("sp").innerHTML=" ";
return 'y';
}
}
function echeck(){
var ec,ev;
ec=document.getElementById("e").value;
ev=/^[0-9a-zA-Z._-]+\@[a-zA-Z]+\.[a-zA-Z.]{2,6}$/;
if(!ec.match(ev)){
document.getElementById("es").innerHTML="***email check***";
return 'n';
}
else{
document.getElementById("es").innerHTML=" ";
return 'y';
}
}
function pcheck(){
var pc,pv;
pc=document.getElementById("p").value;
pv=/^[0-9]{10,10}$/;
if(!pc.match(pv)){
document.getElementById("ps").innerHTML="***number check ***";
return 'n';
}
else{
document.getElementById("ps").innerHTML=" ";
return 'y';
}
}
function abc(){
if(ncheck()=='y'&& ncheck()=='y'){
var a,b,c,d,e, x1="Selected :- ";
a=document.getElementById("n").value;
b=document.getElementById("e").value;
c=document.getElementById("p").value;

document.getElementById("x").value="name :-"+a;
document.getElementById("x").value+="\n email id:-"+b;
document.getElementById("x").value+="\n phone no:-"+c;
}
else{
ncheck();
echeck();
pcheck();
}
}


