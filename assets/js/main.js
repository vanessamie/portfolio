window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    backToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(hard)
    activateMenuAtCurrentSection(hobbies)
    activateMenuAtCurrentSection(projetos)
    activateMenuAtCurrentSection(formacao)
    activateMenuAtCurrentSection(contato)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    
    const sectionTop = section.offsetTop

    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
   
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    let navigation = document.getElementById('navegacao')
    
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    } 
}

function backToTopButtonOnScroll() {
    let backToTopButton = document.getElementById('backToTopButton')
    
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}
console.log(backToTopButtonOnScroll());

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,  
#hard,
#hobbies,
#projetos,
#formacao,
#contato
`);
