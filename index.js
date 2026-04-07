
function ncheck(){
var nc,nv;
nc=document.getElementById("n").value;
nv=/^[a-zA-Z ]+$/;
nc=nc.trim();
if(!nc.match(nv)||nc.lenght==0){
document.getElementById("ns").innerHTML="***name check ***";
return 'n';
}
else{
document.getElementById("ns").innerHTML=" ";
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
function abc1(){
document.getElementById("aa1").style.visibility="visible";
}


var a=new Array("1.jpg","2.jpg","3.jpg","5.jpg","p.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg");
var b=new Array("Potable water","Fresh water","Salt water","Brackish water","Hard water","soft water","Distilled water","Wastewater","Black water","Grey water","Raw water");
var c=new Array("Potable water or drinking water is water fit for human consumption, which has undergone appropriate treatment and can be consumed without any risks. It is clean, transparent, has no unpleasant odour or taste and is free of any contaminants.",
"Fresh water is found naturally on the Earth's surface as ice, as water in wetlands, ponds, lakes, rivers and streams, and as groundwater in aquifers. It usually has a low concentration of dissolved salts and solids.",
"It is also called seawater, found in the Earth's oceans and seas. It has a concentration of dissolved salts of about 3.5%.",
"The salinity of brackish water is somewhere between that of fresh waterand seawater.  The salinity of brackish water is not accurately defined; it canrange between 0.5 to 30 grams of salt per litre.",
"Hard water has a high mineral content, particularly magnesium and calcium salts. It is also known as calcareous water.",
"Soft water contains  very small amounts of dissolved salts. It may be defined as water with less than 50 mg per litre of calcium carbonate.",
"Distilled water is composed of H2O molecules, having been purified or cleaned through distillation.",
"Wastewater is any type of water whose quality has been negatively affected byhuman activity. According to the FAO, the water has no immediate value for thepurpose it was used or produced because of its quality, quantity, or the moment at which it is available.",
"Within the different kinds of used water, black waters are those that have been polluted with faeces or urine .",
"Grey water is domestic wastewater. It has less nitrogen and phosphorous than black water,and contains organic and inorganic material, and microorganisms. Grey water owes its nameto its murky appearance and because it is somewhere between potable freshwater and wastewater.",
"Raw water is water that has not undergone any treatment. It is found in natural sourcesand reserves, in surface and groundwater bodies.");

i=0;
function slide(){
if(i<10){
i++;
}
else{
i=0;
}
document.getElementById("i").src=a[i];
document.getElementById("sp").innerHTML=b[i];
document.getElementById("sp1").innerHTML=c[i];
setTimeout('slide()',2000);
}