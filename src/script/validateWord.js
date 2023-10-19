const validateWord = (wordTranslate, wordOrigin)=>{
    
    const goodMark = document.createElement('img')
    goodMark.classList.add('card__good-mark')
    goodMark.setAttribute('alt','good mark')
    goodMark.setAttribute('src', 'src/assets/images/good.png')
    
    const input = document.querySelector('.card__input')
    const cardBack = document.querySelector('.card__back')
    

    if(input.value == wordTranslate){
        cardBack.insertAdjacentElement('beforeend',goodMark)
        
        
    } 

}

export default validateWord