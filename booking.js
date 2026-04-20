
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
pc=document.getElementById("ph").value;
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

function abc1(){
var a,p,i;
a=document.getElementById("p").value;
if(a=='potable water'){
p=80;
i='p.jpg';
}
else if(a=='fresh water'){
  p=70;
  i='f.jpg';
}
    else if(a=='salt water'){
	p=60;
	i='s.jpg';
	}
	    else if(a=='brackish water'){
		p=100;
		i='b.jpg';
		}
		    else if(a=='hard water'){
			p=50;
			i='h.jpg';
			}
			else if(a=='soft water'){
			p=40;
			i='so.jpg';
			}
			else if(a=='distilled water'){
			p=30;
			i='d.jpg';
			}
			else if(a=='waste water'){
			p=20;
			i='w.jpg';
			}
			else if(a=='black water'){
			p=40;
			i='bl.jpg';
			}
			else if(a=='grey water'){
			p=40;
			i='g.jpg';
			}
			else if(a=='raw water'){
			p=10;
			i='r.jpg';
			}
			   else{
			   p=0;
			   i=' ';
			  }
document.getElementById("r").value=p;
document.getElementById("i").src=i;			   
} 
function cartb(){
var p,q,r,i;
p=document.getElementById("p").value;
q=document.getElementById("q").value;
r=document.getElementById("r").value;
i=document.getElementById("i").src;
if(p!='s' && q!='s'){
var p1,p2,p3;
p1=document.getElementById("p1").value;
p2=document.getElementById("p2").value;
p3=document.getElementById("p3").value;
p4=document.getElementById("p4").value;
p5=document.getElementById("p5").value;
if(p1==0){
document.getElementById("p1").value=p;
document.getElementById("r1").value=r;
document.getElementById("q1").value=q;
document.getElementById("i1").src=i;
}
else if(p2==0){
document.getElementById("p2").value=p;
document.getElementById("r2").value=r;
document.getElementById("q2").value=q;
document.getElementById("i2").src=i;
}
else if(p3==0){
document.getElementById("p3").value=p;
document.getElementById("r3").value=r;
document.getElementById("q3").value=q;
document.getElementById("i3").src=i;
}
else if(p4==0){
document.getElementById("p4").value=p;
document.getElementById("r4").value=r;
document.getElementById("q4").value=q;
document.getElementById("i4").src=i;
}
else if(p5==0){
document.getElementById("p5").value=p;
document.getElementById("r5").value=r;
document.getElementById("q5").value=q;
document.getElementById("i5").src=i;
}
else{
alert("cart is full");
}
}
else{
alert("plz select product and quantity");
}
}

function clear1(){
document.getElementById("p1").value=0;
document.getElementById("r1").value=0;
document.getElementById("q1").value=0;
document.getElementById("i1").src='';
}
function clear2(){
document.getElementById("p2").value=0;
document.getElementById("r2").value=0;
document.getElementById("q2").value=0;
document.getElementById("i2").src='';
}
function clear3(){
document.getElementById("p3").value=0;
document.getElementById("r3").value=0;
document.getElementById("q3").value=0;
document.getElementById("i3").src='';
}
function clear4(){
document.getElementById("p4").value=0;
document.getElementById("r4").value=0;
document.getElementById("q4").value=0;
document.getElementById("i4").src='';
}
function clear5(){
document.getElementById("p5").value=0;
document.getElementById("r5").value=0;
document.getElementById("q5").value=0;
document.getElementById("i5").src='';
}

 function bill(){
 var x1,q1,r1,a1=0;
 x1=document.getElementById("p1").value;
 q1=document.getElementById("q1").value;
 r1=document.getElementById("r1").value;
 if(x1!=0 && q1!=0){
 a1=r1*q1;
 }
    var x2,q2,r2,a2=0;
 x2=document.getElementById("p2").value;
 q2=document.getElementById("q2").value;
 r2=document.getElementById("r2").value;
 if(x2!=0 && q2!=0){
 a2=r2*q2;
 }
 var x3,q3,r3,a3=0;
 x3=document.getElementById("p3").value;
 q3=document.getElementById("q3").value;
 r3=document.getElementById("r3").value;
 if(x3!=0 && q3!=0){
 a3=r3*q3;
 }
 var x4,q4,r4,a4=0;
 x4=document.getElementById("p4").value;
 q4=document.getElementById("q4").value;
 r4=document.getElementById("r4").value;
 if(x4!=0 && q4!=0){
 a4=r4*q4;
 }
 var x5,q5,r5,a5=0;
 x5=document.getElementById("p5").value;
 q5=document.getElementById("q5").value;
 r5=document.getElementById("r5").value;
 if(x5!=0 && q5!=0){
 a5=r5*q5;
 }
 var a=0;
 a=a1+a2+a3+a4+a5;
 if(a>0){
 if(ncheck()=='y'&& echeck()=='y'&& pcheck()=='y'){
 var n,e,p;
 n=document.getElementById("n").value;
 e=document.getElementById("e").value;
 p=document.getElementById("ph").value;
 document.getElementById("x").value="Dear"+n;
 document.getElementById("x").value+="\n Your Bill details send on given email id:-"+e+", or phone no:-"+p;
 
  if(a1>0){
  document.getElementById("x").value+="\n\n Your Purchases item:-"+x1+", Quantity:-"+q1+",Rate rs:-"+r1+".00/-";
  }
  if(a2>0){
  document.getElementById("x").value+="\n\n Your Purchases item:-"+x2+", Quantity:-"+q2+",Rate rs:-"+r2+".00/-";
  }
  if(a3>0){
  document.getElementById("x").value+="\n\n Your Purchases item:-"+x3+", Quantity:-"+q3+",Rate rs:-"+r3+".00/-";
  }
  if(a4>0){
  document.getElementById("x").value+="\n\n Your Purchases item:-"+x4+", Quantity:-"+q4+",Rate rs:-"+r4+".00/-";
  }
  if(a5>0){
  document.getElementById("x").value+="\n\n Your Purchases item:-"+x5+", Quantity:-"+q5+",Rate rs:-"+r5+".00/-";
  }
  document.getElementById("x").value+="\n\n Your Pay Bill Rs:-"+a+".00/-";
  document.getElementById("x").value+="\n\n *****Thanks for shopping******";
  }
  else{
  document.getElementById("x").value=" ";
  ncheck();
  echeck();
  pcheck();
  }
  }
  else{
  alert("plz select product and quantity");
  }
 }
 