const audioBtns = document.querySelectorAll('.card__audio')
const word = document.querySelector('.card__front p')
const speak = ()=>{
    const synth = window.speechSynthesis;
    // const utterThis = new SpeechSynthesisUtterance(word.textContent);
   
  
  
  // audioBtns.forEach(btn =>{
  //   btn.addEventListener('click',(e)=>{
  //       utterThis.lang ='en-GB'
  //       utterThis.text =`${word.textContent}`
  //      console.log(utterThis);
  //       synth.speak(utterThis);
  //   })
  // })
    
}

export default speak