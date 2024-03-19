// =================pre loader ==================
$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    if ($('#container').hasClass('loaded')) {
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });}
  }, 1);});
// ======================pre loader======================
// ========================banner part slider=================
$('.banner_row').slick({
  // autoplay: true,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow:false,
  nextArrow:false,
});

// ======================= menu part==============
let menu_bar = document.querySelector('.menu_bar')
console.log(menu_bar)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    menu_bar.classList.add('menu_fixed')
  } else {
    menu_bar.classList.remove('menu_fixed')
  }
})
// =====================back to top button===================
let back_to_top = document.querySelector('.back_to_top')
console.log(back_to_top)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    back_to_top.classList.add('go_top')
  } else {
    back_to_top.classList.remove('go_top')
  }
})

back_to_top.addEventListener('click',function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })

})
// =======================back to top button==================
// =================text animation
var words = [' Designer.',' Developer.',  'Professional Coder.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

$('.counter').counterUp({
    delay: 10,
    time: 2000,
  });


  // ====================siilk slider===============
  $('.client_say_row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
    dots:true,
  });