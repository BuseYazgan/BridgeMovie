window.onscroll=function(){navbar()};

function navbar(){

    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById("header").style.backgroundColor="#050727";
        document.getElementById("header").style.position="fixed";
        document.getElementById("logo").style.display="none";
        document.getElementById("navbar-right").style.justifyContent="center";
        document.getElementById("grid-container").style.marginRight="10%";
        document.getElementById("navbar-left").style.marginRight="50px";
    }
    else{
        document.getElementById("header").style.backgroundColor="transparent";
        document.getElementById("header").style.position="absolute";
        document.getElementById("logo").style.display="block";
        document.getElementById("navbar-right").style.justifyContent="flex-start";
        document.getElementById("grid-container").style.marginRight="0";
        document.getElementById("navbar-left").style.marginRight="0px";
    }
}