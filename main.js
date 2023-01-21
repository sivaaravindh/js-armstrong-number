let btn1=document.getElementById("btn");
btn1.addEventListener("click",myFunct);

function myFunct(){
var num=parseInt (document.getElementById("arm").value);
let num2=num;
let num3=num;
let sum;
let len=0;
let sum2;
let ans=0;
while (num2!=0) {
    sum =num2 % 10; 
    num2=(num2-sum)/10;
    len++;  
}


while (num!=0) {
    sum2=num%10;
    num=(num-sum2)/10;
    ans+=sum2**len;
}

if(num3==ans){
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


