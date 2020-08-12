$('.nav-item').click((event)=>{
    $('.active').toggleClass('active')
    console.dir(event.target)
    $(event.target.parentNode).addClass('active')
})

