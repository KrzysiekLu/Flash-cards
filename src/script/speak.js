import { controller } from "./main.js";
const speak = ()=>{
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(controller.currentWordOrigin);
        utterThis.lang ='en-GB'
        utterThis.text =`${controller.currentWordOrigin}`
        synth.speak(utterThis);
}

export default speak