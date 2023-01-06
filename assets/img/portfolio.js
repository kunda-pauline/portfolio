function show(){
    document.getElementById('sidebar').classList.toggle('active');
} 



function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");
var y=document.getElementById('name');
var z= document.getElementById('message');


  if(y.value ==="" ||y.value == "null"){
    alert("please enter your name ");

} 
else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address ");  
  
   
  } 
else if(z.value===""||z.value=="null"){
    alert("please enter your message before send");
}
else{
    alert("message sent successfully");
}
}  