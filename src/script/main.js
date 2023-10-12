
import translate from "../../node_modules/translate/index.min.js"

translate.from ="pl"

const trans  = async(from)=>{
let to = await translate(`${from}`, 'es')
    
}



trans('Co tam słychać')

const card = document.querySelector('.card')
const cardSubmint = document.querySelector('#cardSubmit')
document.addEventListener('keypress',(e)=>{
    e.key === 'Enter'? card.classList.toggle('card--flip'): null;
})
cardSubmint.addEventListener('click',()=>{
    card.classList.toggle('card--flip')
})