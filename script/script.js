$('.nav-link').click((event)=>{
    $('.active').toggleClass('active')
    $(event.target).addClass('active')
})

