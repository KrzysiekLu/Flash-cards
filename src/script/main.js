
import translate from "../../node_modules/translate/index.min.js"
import * as Ui from "./ui.js"
import getRandomWord from "./getWord.js"
import speak from "./speak.js"


translate.from ="eng"
const trans  = async(from)=>{
let trans = await translate(`${from}`, 'pol')
return trans
}


const controler = {
    currentWordOrigin:'',
    currentWordTranslate:'',
    
}

export const getNewWord = () => {
    getRandomWord()
      .then((resp) => {
        controler.currentWordOrigin = resp;
        return trans(resp);
      })
      .then((resp) => {
        controler.currentWordTranslate = resp;
        console.log(controler.currentWordTranslate);
        Ui.generateCard(controler.currentWordOrigin, controler.currentWordTranslate);
      })
      .catch((error) => {
        console.error("Wystąpił błąd:", error);
      });
  };



const init = () =>{
    speak()
    getNewWord()
    
}
init()


