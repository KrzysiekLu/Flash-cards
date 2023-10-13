
import translate from "../../node_modules/translate/index.min.js"
import uiInit from "./ui.js"
import getRandomWord from "./getWord.js"

translate.from ="eng"
const trans  = async(from)=>{
let trans = await translate(`${from}`, 'pol')
return trans
}

const displayTranslation =(translation)=>{
const cardTranslation = document.querySelector('.card__back p')

cardTranslation.innerText = translation

}


const init = () =>{
    uiInit()
    getRandomWord().then(resp=>{
        return trans(resp)
    }).then((resp)=>{
        displayTranslation(resp)
    })
}
init()