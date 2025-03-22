
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true, 
      touchDrag:true,
      autoplay: true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      dots:true,
      dotsEach:1,
      margin: 10, 
      nav: false, 
      smartSpeed: 1000,
      slideTransition: 'ease-in-out',
      responsive: {
        0: {
          items: 1 
        },
        600: {
          items: 2
        },
        1000: {
          items: 3 
        }
      }
    });

   // متغير لتتبع العنصر اللي بيخرج
   let exitingItem = null;

   // قبل الانتقال: تحديد العنصر اللي هيخرج
   $('.owl-carousel').on('translate.owl.carousel', function(event) {
       var activeItems = $('.owl-carousel .owl-item.active');
       var firstActiveIndex = activeItems.first().index(); // أول عنصر نشط (اللي على الشمال)

       // العنصر اللي هيخرج هو أول عنصر نشط (لأن الاتجاه RTL)
       exitingItem = activeItems.first();

       // ضبط الشفافية لكل العناصر
       $('.owl-carousel .owl-item').css('opacity', 1); // كل العناصر ظاهرة
       if (exitingItem) {
           exitingItem.css('opacity', 0.3); // العنصر اللي بيخرج يبقى شبه شفاف
       }
   });

   // بعد الانتقال: التأكد من إن كل العناصر الجديدة ظاهرة
   $('.owl-carousel').on('translated.owl.carousel', function(event) {
       $('.owl-carousel .owl-item').css('opacity', 1); // كل العناصر ظاهرة
       if (exitingItem) {
           exitingItem.css('opacity', 0.3); // العنصر اللي خرج يظل شبه شفاف
       }
   });

   // ضبط الشفافية في البداية
   $('.owl-carousel .owl-item').css('opacity', 1);

  });


  