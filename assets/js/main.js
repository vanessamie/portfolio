window.addEventListener('scroll', onScroll) //adiciona o evento de scroll na página

onScroll() //corrige o bug de carregamento de página
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

//Função para deixar a opção do menu ativa conforme scroll na página.
function activateMenuAtCurrentSection(section) {
    //Cria uma linha imaginária (linha alvo)
    const targetLine = scrollY + innerHeight / 2
    
    //topo da seção
    const sectionTop = section.offsetTop

    //altura da seção
    const sectionHeight = section.offsetHeight

    //o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    //verifica se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
   
    //limites da seção
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

//abrir e fechar o menu expansível
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
`)