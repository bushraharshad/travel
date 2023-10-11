$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  }) ;
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });

$('.count').each(function(){
    var $this=$(this),
    countTo=$this.attr('data-count');
    $({countNum : $this.text()}).animate({
      countNum:countTo
    },
    {
      duration:500,
      step:function(){
        $this.text(Math.floor(this.countNum));
      },
      complete :function(){
        $this.text(this.countNum +'+');
      }
    }
    )
  });
  $('.package').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true,
    }
  });
  
});
function display(){

  document.getElementById("btn").style.color= "red";
  }
  function closes(){

    document.getElementById("btn").style.color= "blue";
}
