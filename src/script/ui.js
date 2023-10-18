import { getNewWord } from "./main.js"
import { controller } from "./main.js"
export const flipCardAnimtion=()=>{
    const card = document.querySelector('.card')
    const cardSubmint = document.querySelector('#cardSubmit')
    document.addEventListener('keypress',(e)=>{
        e.key === 'Enter'? card.classList.toggle('card--flip'): null;
    })
    cardSubmint.addEventListener('click',()=>{
        card.classList.toggle('card--flip')
    })  
}
const nextBtn = document.querySelector('#next')
export const nextCardAnimation = (card)=>{
    card.classList.add('card__next-animation')
}
export const generateCard = ()=>{
    // card
    const cardContainer = document.querySelector('.card__container')
    cardContainer.textContent=''
    const card = document.createElement('div')
    card.classList.add('card')
    // card-front
    const cardFront = document.createElement('div')
    const frontOrigin = document.createElement('p')
    frontOrigin.textContent=controller.currentWordOrigin
    frontOrigin.classList.add('origin')
    cardFront.insertAdjacentElement('afterbegin',frontOrigin)
    card.insertAdjacentElement('afterbegin', cardFront)
    cardContainer.insertAdjacentElement("afterbegin",card)
    cardFront.classList.add('card__side', 'card__front')
    // card-back origin
    const cardBack = document.createElement('div')
    cardBack.classList.add('card__side', 'card__back')
    card.insertAdjacentElement('afterbegin',cardBack)
    const backOrigin = document.createElement('p')
    backOrigin.textContent=controller.currentWordOrigin
    backOrigin.classList.add('origin')
    cardBack.insertAdjacentElement('afterbegin',backOrigin)
    // card-back translate
    const backTranslate = document.createElement('p')
    backTranslate.textContent = controller.currentWordTranslate
    cardBack.insertAdjacentElement('beforeend',backTranslate)
    // inputs
    const input = document.createElement('input')
    input.classList.add('card__input')
    cardFront.insertAdjacentElement('beforeend',input)
    // audio 
        const audioBtn = document.createElement('i')
        audioBtn.classList.add('material-symbols-outlined', 'card__audio')
        audioBtn.textContent='record_voice_over'
        card.insertAdjacentElement('afterbegin',audioBtn)
        flipCardAnimtion()
    return {card,audioBtn}

   
   
}
nextBtn.addEventListener('click',()=>{
    nextCardAnimation(generateCard().card)
    setTimeout(()=>{
        getNewWord()
    },100)
}  )