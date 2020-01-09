
  $(document).ready(function(){  
   $('.slides:first-child').addClass("current");
    $("a.next").click(function(){
        if($(".current").next(".slides").length){
            $(".current").removeClass("current").addClass('previous').next(".slides").addClass("current");
        }
    })

    $("a.prev").click(function(){
        if($(".current").prev(".slides").length){
            $(".current").removeClass("current").prev(".slides").addClass("current").removeClass("previous");
        }
    })

  })
