
import translate from "../../node_modules/translate/index.min.js"

translate.from ="pl"

const trans  = async(from)=>{
let to = await translate(`${from}`, 'es')
    document.body.innerHTML = `${from} po hiszpańsku znaczy: ${to}`
    
}


trans('Co tam słychać')