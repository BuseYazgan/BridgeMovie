function showInfo(){
  var x=document.getElementById("second-card1");
  var y=document.getElementById("second-card2");
  var z=document.getElementById("second-card3");
  var a=document.getElementById("second-info1");
  var b=document.getElementById("second-info2");
  var c=document.getElementById("second-info3");

  if(x.className=="second-card1"){
    a.style.visibility="visible";
    y.style.right="0px";
    z.style.right="20%";
    b.style.visibility="hidden";
    c.style.position="absolute";
    c.style.visibility="hidden";
  }
}

function showInfo2(){
  var x=document.getElementById("second-card2");
  var y=document.getElementById("second-card3");
  var a=document.getElementById("second-info1");
  var b=document.getElementById("second-info2");
  var c=document.getElementById("second-info3");

  if(x.className=="second-card2"){

    b.style.visibility="visible";
    c.style.visibility="hidden";    
    c.style.position="absolute";

    if(a.style.visibility=="visible"){
    a.style.visibility="hidden";
    x.style.right="20%";
    }

    else{
    a.style.visibility="hidden";  
    y.style.right="20%";
    }
  }
}

function showInfo3(){
  var x=document.getElementById("second-card3");
  var y=document.getElementById("second-card2");
  var a=document.getElementById("second-info1");
  var b=document.getElementById("second-info2");
  var c=document.getElementById("second-info3");

  if(x.className=="second-card3"){

    c.style.position="relative";
    c.style.visibility="visible";
    b.style.visibility="hidden";    
    x.style.right="40%";

    if(a.style.visibility=="visible") {
      a.style.visibility="hidden";
      b.style.visibility="hidden";
      y.style.right="20%";
    }
    
  }
}