let btn1=document.getElementById("btn");
btn1.addEventListener("click",myFunct);

function myFunct(){
var x=parseInt (document.getElementById("arm").value);
let sum=0;
let exm=x;
while(exm>0){
    y=exm % 10;
    sum+=y**3;
    exm=parseInt(exm/10)
}
if(x==sum){
  document.getElementById("con").innerText="yes armstrong";
}
else{
  document.getElementById("con").innerText="not armstrong"; 
}

}

// else if(a<60 && a>=40){
//   document.getElementById("total").value=a;
//   document.getElementById("grate").innerText="D ";
// }
// else{
//   document.getElementById("total").value=a;
//   document.getElementById("grate").innerText=" F";

// }

// }


