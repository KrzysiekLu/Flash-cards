
const drawNumOfWord =(arrLength)=>{const num = Math.floor(Math.random() * arrLength)
return num
}
// const displayWord =(word)=>{
//     const wordEng = document.querySelector('.card__front p')
//     const wordEngBack = document.querySelector('.orgin')
//     wordEng.innerText = word
//     wordEngBack.innerText = word
// }

const getRandomWord= ()=>{
return fetch('src/data/oxford-3000.json').then((resp)=>resp.json()    
).then(resp=>{
    const word = resp[drawNumOfWord(resp.length)]
return word
})
}


export default  getRandomWord