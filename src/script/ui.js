
  const uiInit=()=>{
    const card = document.querySelector('.card')
    const cardSubmint = document.querySelector('#cardSubmit')
    document.addEventListener('keypress',(e)=>{
        e.key === 'Enter'? card.classList.toggle('card--flip'): null;
    })
    cardSubmint.addEventListener('click',()=>{
        card.classList.toggle('card--flip')
    })  
}
export default  uiInit