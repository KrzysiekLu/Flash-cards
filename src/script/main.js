
import translate from "../../node_modules/translate/index.min.js"
import uiInit from "./ui.js"
import getRandomWord from "./getWord.js"
import speak from "./speak.js"


translate.from ="eng"
const trans  = async(from)=>{
let trans = await translate(`${from}`, 'pol')
return trans
}

const displayTranslation =(translation)=>{
const cardTranslation = document.querySelector('.card__back .translate')
cardTranslation.innerText = translation
}
const controler = {
    currentWordOrigin:'',
    currentWordTranslate:'',
}

const getNewWord = ()=>{
    getRandomWord().then(resp=>{
        controler.currentWordOrigin= resp
        return trans(resp)
    }).then((resp)=>{
        controler.currentWordTranslate = resp
        console.log(controler);
        displayTranslation(resp)
    })
}
const nextBTN = document.querySelector('.card__button--next').addEventListener('click',getNewWord)

const init = () =>{
    speak()
    uiInit()
    getNewWord()
    
}
init()


