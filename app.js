const navbarMenu = document.querySelector('.menu')
const iconToggle = document.querySelector('.toggle_icon')
const menuLinks = document.querySelectorAll('.menu-link')
const iconClose = document.querySelector('.close_icon')

iconToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle('active')
})

iconClose.addEventListener("click", () => {
    navbarMenu.classList.remove("active")
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        navbarMenu.classList.remove('active')
        menuLinks.forEach(list => {
            list.classList.remove('active-link')
        })
        item.classList.add("active-link")
    })
})

// Change background header
function scrollHeader() { 
    const header = document.querySelector('header')
    this.scrollY > 20 ? header.classList.add('active-header') : header.classList.remove('active-header')
}

window.addEventListener('scroll',scrollHeader)


//hero type efect
const typed = document.querySelector('.typed')
if(typed) {
    let type_strings = typed.getAttribute('data-typed-items')
    type_strings = type_strings.split(",")
    let typeds = new Typed ('.typed', {
        strings:type_strings,
        loop:true,
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000
    })
}

// header logo
const headerLogo = document.querySelector('.header-logo')
console.log(headerLogo)
if(headerLogo) {
    let logoStrings = ["Live Code"]
    let logotype = new Typed('.header-logo', {
        strings:logoStrings,
        loop:true,
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000
    })
}
// Scroll seciton active link 
const seciton = document.querySelectorAll('section[id]')

function scrollActive () {
    const scrollY = window.pageYOffset;
    seciton.forEach(seciton => {
        const secitonHeight = seciton.offsetHeight;
        const secitonTop = seciton.offsetTop -50;

        let sectionId = seciton.getAttribute('id')
        if(scrollY > secitonTop && scrollY <= secitonHeight + secitonTop) {
            document.querySelector('.menu a[href *= ' + sectionId + ']').classList.add('active-link') 
        }else {
            document.querySelector('.menu a[href *= ' + sectionId + ']').classList.remove('active-link') 
            
        }
    })


}
window.addEventListener("scroll",scrollActive)


// resume scroll
const pages = document.querySelectorAll('.page')
const resume = document.querySelector('.resume')
console.log(pages)
function resumeActive() {
    const scrollY = window.pageYOffset;
    pages.forEach (page => {
        const pageHeight = page.offsetHeight
        const pageTop = page.offsetTop - 80
        let pageId = page.getAttribute('id')

        if(scrollY > pageTop && scrollY <= pageTop + pageHeight) {
            document.querySelector('.resume-tabs ul a[href *= ' + pageId +']').classList.add('current')
        }else {
            document.querySelector('.resume-tabs ul a[href *= ' + pageId +']').classList.remove('current')

        }

    })
}
window.addEventListener("scroll",resumeActive)


// portfolio section 
let filterItems = document.querySelectorAll('.portfolio-filters li')

function activeprotfolio () {
    filterItems.forEach (el => {
        el.classList.remove('filters-active')
        this.classList.add('filters-active')
    })
}
filterItems.forEach (el => {
    el.addEventListener("click", activeprotfolio)
}) 

// ========= 

let mixerPortfolio = mixitup('.portfolio-wrap-container',{
    selectors: {
        target:'.portfolio-item'
    },
    animation : {
        duration:300
    }
})
var mixer = mixitup('.portfolio-wrap-container', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
});



// swiper js

const swiper = new Swiper(".testimonial-container", {
    effect:'slide',
    loop:true,
    slidesPerView:1,
    grabCursor:true,
    spaceBetween:100,
    breakpoints: {
        768: {
            slidesPerView:2,
        }
    }
});

// services modal 
const modalBtns = document.querySelectorAll('.services-button') 
const modalView = document.querySelectorAll('.services-modal')
const modalClose = document.querySelectorAll('.close-modal')

const modal = function (modalClick) {
    modalView[modalClick].classList.add('active-modal')

}


modalBtns.forEach((item,i)=> {
    item.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((item,i)=> {
    item.addEventListener("click", () => {
        modalView.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})