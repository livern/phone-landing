$('document').ready(()=>{
    const header = document.querySelector('.header')
    $(window).scroll(()=>{
        let scrolltop = $(this).scrollTop();
        if(scrolltop>20){
            header.classList.add('header-scroll')
        }else{
            header.classList.remove('header-scroll')
        };
    })

    slide_right()
    
})

const menu = document.querySelector('.menu-place')
const menu_placeholder = document.querySelector('.menu-placeholder')
const review_text = document.querySelector('.review-text')
const author = document.getElementById('author')
const switch_button = document.querySelector('.switch-button')

let slider_state = 0

function menu_slide(){
    menu_placeholder.classList.add('move')
    menu_placeholder.classList.remove('unmove')
    menu.classList.remove('close')
    menu.classList.add('open')
    
}
function menu_close(){ 
    menu_placeholder.classList.remove('move')
    menu_placeholder.classList.add('unmove')
    menu.classList.remove('open')
    menu.classList.add('close')

}
function slide_right(){
    setInterval(() => {
        slider_state++
        switch(slider_state){
            case 1:
            $('#user-one').css('opacity','50%')
            $('#user-two').css('opacity','100%')
            $('#user-three').css('opacity','50%')
            review_text.innerHTML = "New Providence is the best app!"
            author.innerHTML = "GEORGE STANLY"
            break;
            case 2:
            $('#user-one').css('opacity','50%')
            $('#user-two').css('opacity','50%')
            $('#user-three').css('opacity','100%')
            review_text.innerHTML = "Its a new mobile revolution!"
            author.innerHTML = "SAM MARTIN"
            break;
            case 3:
            $('#user-one').css('opacity','100%')
            $('#user-two').css('opacity','50%')
            $('#user-three').css('opacity','50%') 
            review_text.innerHTML="New Providence is the great UI kit" 
            author.innerHTML = "CAMERON DOWNMAN"
            break;
        }
        if(slider_state>=3){
            slider_state = 0
        }        
    }, 4000);

}

function switch_slide(){
switch_button.classList.toggle('switch-slide')
if(switch_button.classList.contains('switch-slide'))switch_button.innerHTML = "Company"
else switch_button.innerHTML = "Individual"
}

