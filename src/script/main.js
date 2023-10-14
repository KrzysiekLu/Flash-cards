
import translate from "../../node_modules/translate/index.min.js"
import uiInit from "./ui.js"
import getRandomWord from "./getWord.js"

translate.from ="eng"
const trans  = async(from)=>{
let trans = await translate(`${from}`, 'pol')
return trans
}
const getMp3 = (word)=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(resp=>{return resp.json()}).then(resp=>{
       let [arr] = resp
       console.log(arr);
       
        
    })
}

const displayTranslation =(translation)=>{
const cardTranslation = document.querySelector('.card__back .translate')
cardTranslation.innerText = translation
}


const init = () =>{
    uiInit()
    getRandomWord().then(resp=>{
        getMp3(resp)
        return trans(resp)
    }).then((resp)=>{
        displayTranslation(resp)
    })
}
init()