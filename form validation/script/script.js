function validation()

{
   username();
   fathervali();
   emailvali();
   dobvali();
   phonevali();
   addressvali();
   cityvali();
   pinvali();
   permanentvali();

}

// UserName Validation
function username()
{

    var fname=document.getElementById("FirstName").value;
    var regx1=/[A-Za-z]+$/;
    if(fname=="")
    {   

        document.getElementById("FirstName").style.border="2px solid red";
        var fnout =document.getElementById("fnstyle");
        fnout.style.color="red";
        fnout.style.visibility="visible";
        
        
    }
    else if(regx1.test(fname))
    {
        document.getElementById("FirstName").style.border="1px solid black";
        document.getElementById("fnstyle").style.visibility="hidden";
        
    }
}

// Father's Name Validation
function fathervali()
{
    var fname1=document.getElementById("FatherName").value;
    var regx2=/[A-Za-z]+$/;
    if(fname1=="")
    {   

        document.getElementById("FatherName").style.border="2px solid red"
        var fnout1 =document.getElementById("fatherstyle");
        fnout1.style.color="red";
        fnout1.style.visibility="visible";
       
        
    }
    else if(regx2.test(fname1))
    {
        document.getElementById("FatherName").style.border="1px solid black";
        document.getElementById("fatherstyle").style.visibility="hidden";
        
    }
}
// Email id Validation
function emailvali()
{
     
    var email=document.getElementById("Email").value;
    var regx3=/([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,8})(.[a-z]{2,8})?$/;
    if(regx3.test(email))
    {

        document.getElementById("Email").style.border="1px solid black";
        document.getElementById("emailstyle").style.visibility="hidden";
        
    }
    else
    {
        document.getElementById("Email").style.border="2px solid red";
        var emout2=document.getElementById("emailstyle");
        emout2.style.color="red";
        emout2.style.visibility="visible";
       
        
    }
}
// DOB validation
function dobvali()
{
     
    var dobb=document.getElementById("DOB").value;
    var regx4=/([0-3])([0-9]-([0-1])([0-9])-([0-2])([0-9]){3})$/;
    if(regx4.test(dobb))
    {

        document.getElementById("DOB").style.border="1px solid black";
        document.getElementById("dobstyle").style.visibility="hidden";
       
    }
    else 
    {
        document.getElementById("DOB").style.border="2px solid red";
        var dobout=document.getElementById("dobstyle");
        dobout.style.color="red";
        dobout.style.visibility="visible";
       
        
    }

}
// Phone Number validation
function phonevali()
{
    var mob=document.getElementById("MobileNumber").value;
    var regx5=/[6-9]\d{9}$/;
    if(regx5.test(mob))
    {

        document.getElementById("MobileNumber").style.border="1px solid black";
        document.getElementById("mobstyle").style.visibility="hidden";
        
    }
    else 
    {
    
        document.getElementById("MobileNumber").style.border="2px solid red";
        var mobout=document.getElementById("mobstyle");
        mobout.style.color="red";
        mobout.style.visibility="visible";
      
        
    }
}
// Pincode Validation
function pinvali()
{
    var pin=document.getElementById("Pincode1").value;
    var regx6=/\d{6}$/;
    if(regx6.test(pin))
    {

        document.getElementById("Pincode1").style.border="1px solid black";
        document.getElementById("pinstyle").style.visibility="hidden";
        
    }
    else 
    {
        
        document.getElementById("Pincode1").style.border="2px solid red";
        var pinout=document.getElementById("pinstyle");
        pinout.style.color="red";
        pinout.style.visibility="visible";
        return false;
        
    }
}
// Address Validation
function addressvali()
{
    var address=document.getElementById("Address1").value;
    var regx7=/[\w]/;
    if(address=="")
    {   

       
        document.getElementById("Address1").style.border="2px solid red"
        var addout1 =document.getElementById("add1style");
        addout1.style.color="red";
        addout1.style.visibility="visible";
        
        
    }
    else if(regx7.test(address))
    {
        document.getElementById("Address1").style.border="1px solid black";
        document.getElementById("add1style").style.visibility="hidden";
       
    }
}
// City Validation
function cityvali()
{
    var city=document.getElementById("City1").value;
    var regx8=/[\w]/;
    if(city=="")
    {   

        
        document.getElementById("City1").style.border="2px solid red"
        var cityout1 =document.getElementById("citystyle");
        cityout1.style.color="red";
        cityout1.style.visibility="visible";
      
        
    }
    else if(regx8.test(city))
    {
        document.getElementById("City1").style.border="1px solid black";
        document.getElementById("citystyle").style.visibility="hidden";
        
    }
}
// Current Address Validation
function permanentvali()
{


    var cadd1=document.getElementById("Address1").value;
    var cadd2=document.getElementById("Address2").value;
    var ccity=document.getElementById("City1").value;
    var cstate=document.getElementById("State1").value;
    var cpin=document.getElementById("Pincode1").value;
    
    var padd1=document.getElementById("Address3");
    var padd2=document.getElementById("Address4");
    var pstate=document.getElementById("State2");
    var pcity=document.getElementById("City2");
    var ppin=document.getElementById("Pincode2");

    var permanent=document.getElementById("Permanent_Address");
    if(permanent.checked==true)
    {   

       
        padd1.value=cadd1;
        padd2.value=cadd2;
        pcity.value=ccity;
        pstate.value=cstate;
        ppin.value=cpin;
        
        
       
       
        
    }
    else if(permanent.checked==false)
   { 
       
          padd1.value="";
          padd2.value="";
          pcity.value="";
          pstate.value="";
          ppin.value="";
         
       
       
    }
}







