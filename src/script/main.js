
import translate from "../../node_modules/translate/index.min.js"
import * as Ui from "./ui.js"
import getRandomWord from "./getWord.js"
import speak from "./speak.js"


translate.from ="eng"
const trans  = async(from)=>{
let trans = await translate(`${from}`, 'pol')
return trans
}


 export const controller = {
    currentWordOrigin:'',
    currentWordTranslate:'',
    
}

export const getNewWord = () => {
    getRandomWord()
      .then((resp) => {
        controller.currentWordOrigin = resp;
        return trans(resp);
      })
      .then((resp) => {
        controller.currentWordTranslate = resp;
        Ui.generateCard();
        speak(Ui.generateCard().audioBtn) 
    })
   
};



const init = () =>{
    getNewWord()
}
init()


