
const drawNumOfWord =(arrLength)=>{const num = Math.floor(Math.random() * arrLength)
return num
}
const displayWord =(word)=>{
const wordEng = document.querySelector('.card__front p')
wordEng.innerText = word
}

const getRandomWord= ()=>{
return fetch('src/data/oxford-3000.json').then((resp)=>resp.json()    
).then(resp=>{
    const word = resp[drawNumOfWord(resp.length)]
displayWord(word)
return word
})
}


export default  getRandomWord