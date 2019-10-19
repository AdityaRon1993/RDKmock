$('.nav-link').click((event)=>{
    $('.active').toggleClass('active')
    $(event.target).addClass('active')
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(' document.documentElement.scrollTop -->', document.documentElement.scrollTop)
  if (document.documentElement.scrollTop > 100 ) {
    document.querySelector(".nav").style.margin = "-30px";
    document.querySelector(".name").style.margin = "-30px";
    document.querySelector('.name').style.fontSize='2rem'
    

  } else if(document.documentElement.scrollTop < 100 ) {
    document.querySelector(".nav").style.margin = "10px";
    document.querySelector(".name").style.margin = "0px";
    document.querySelector('.name').style.fontSize='2.8rem'

  }
}