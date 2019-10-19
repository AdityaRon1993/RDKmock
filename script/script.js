$('.nav-link').click((event)=>{
    $('.active').toggleClass('active')
    $(event.target).addClass('active')
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(' document.documentElement.scrollTop -->', document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 150 ) {
    $(".nav").addClass('scrollActiveNav')
    $(".name").addClass('scrollActiveName')
    

  } else if(document.documentElement.scrollTop <= 50 ) {
    $(".nav").removeClass('scrollActiveNav')
    $(".name").removeClass('scrollActiveName')

  }
}