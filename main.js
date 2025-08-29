 $(document).ready(function(){
      $(".tabs-nav button").click(function(){
        var tabId = $(this).data("tab");
        
        $(".tabs-nav button").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("active");
        $("#" + tabId).addClass("active");
      });
    });


    // new slider 
$('.slider-wrapper').slick({
  slidesToShow: 4.5,
  slidesToScroll: 1,
  infinite: false,   // left side pe duplicate slide aayegi hi nahi
  centerMode: false, // left half ka scene khatam
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.2,
        infinite: false,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: false,
        centerMode: false
      }
    }
  ]
});
