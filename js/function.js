$(function(){
  var $mnu=$(".gnb a");
  var mnuIdx=0;
  var arrTopVal=[];

  $("article").each(function(idx){
    arrTopVal[idx]=$(this).offset().top;
  });

  function pageAni(topVal){
    $("html,body").stop().animate({
      scrollTop:topVal
    });
  }

   $mnu.on("click",function(evt){
     evt.preventDefault();
     mnuIdx=$mnu.index(this);

     pageAni(arrTopVal[mnuIdx]);
   });

});