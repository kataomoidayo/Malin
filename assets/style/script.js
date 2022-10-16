function majide(){
   var x = document.getElementById('content').innerHTML;
   console.log(x);
   if(x=="x"){
     console.log("close");
     document.getElementById('content').innerHTML="&#x2261;";
     document.getElementById('pencet').style.display="none";
   }else {
     console.log("content");
     document.getElementById('content').innerHTML="x";
     document.getElementById('pencet').style.display="block";
   }
}