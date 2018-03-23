/* Script
 */

	var imgs =["1.jpg", "2.jpg", "3.jpg"];    //（设定想要显示的图片）
    var x = 0;       
            function time1(){
                   x++;   
                   x=x%3;         //         超过2则取余数，保证循环在0、1、2之间
                   document.getElementById("div_first").src ="public/imgs/"+imgs[x];
            }setInterval("time1()",4000);




            // 导航条阴影
            (function(){
              pos = 0;
              ticking = false;
              var nav_daohang = document.querySelector(".nav_daohang");
              window.addEventListener("scroll", function(e){
                pos = window.scrollY;
                if(pos > 600&&!ticking){
                  nav_daohang.classList.add("navbar-default");
                  ticking = true;
                }
                if(pos < 600 && ticking){
                  nav_daohang.classList.remove("navbar-default");
                  ticking = false;
                }
              });
            })();


            function showDaTu(src){
            document.getElementById("defaultImg").src=src;
            }


            function showImg(){ 
            document.getElementById("wxImg").style.display='block'; 
            } 
            function hideImg(){ 
            document.getElementById("wxImg").style.display='none'; 
            } 




            function showDaTu(src){
            document.getElementById("defaultImg").src=src;
            }


            function showImg1(){ 
            document.getElementById("kfImg").style.display='block'; 
            } 
            function hideImg1(){ 
            document.getElementById("kfImg").style.display='none'; 
            } 



            function showImg4(){ 
            document.getElementById("fotter-wx").style.display='block'; 
            } 
            function hideImg4(){ 
            document.getElementById("fotter-wx").style.display='none'; 
            } 






            window.onload = function(){
             var oTop = document.getElementById("to_top");
             var screenw = document.documentElement.clientWidth || document.body.clientWidth;
             var screenh = document.documentElement.clientHeight || document.body.clientHeight;
             oTop.style.left = screenw - oTop.offsetWidth +"px";
             oTop.style.top = screenh - oTop.offsetHeight + "px";
             window.onscroll = function(){
              var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
              oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
             }
             oTop.onclick = function(){
              document.documentElement.scrollTop = document.body.scrollTop =0;
             }
            } 
