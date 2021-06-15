const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


   ///    Remove mobile menu

 const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


 //// scroll 
 
 const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}


window.addEventListener('scroll', scrollActive)
  

function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >=200){
        nav.classList.add('scroll-header');
    }
    else{
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll',scrollHeader);



function scrollTop(){
    const scrollTop = document.getElementById('scrollTop');
    if(this.scrollY >=560){
        scrollTop.classList.add('scrolltop');
    }
    else{
        scrollTop.classList.remove('scrolltop');
    }
}

window.addEventListener('scroll',scrollTop);


///////// dark theme
   

const themeButton = document.getElementById('theme-button');
 


themeButton.addEventListener('click',()=>{
     document.body.classList.toggle('dark-theme');
})