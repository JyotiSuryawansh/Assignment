const apiUrl = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const persantage = document.getElementById('persantage')
const accuracy = document.getElementById('accuracy')
let timerVar 

quoteInputElement.addEventListener('input',() => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let TotalLength = arrayQuote.length
    let InputLength = arrayValue.length
    let counterCorrect=0
    
    let number_Word= quoteInputElement.value.split(' ').length
    let correct = true

    
    arrayQuote.forEach((characterSpan,index) => {
        const character = arrayValue[index]
        if(character == null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }
        else if (character === characterSpan.innerText){
            counterCorrect++
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else{
            
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
           // correct = false
        }
    })

 if(TotalLength==InputLength){
     accuracy.innerHTML= "Accuracy:"+Math.floor((counterCorrect/TotalLength)*100)+"%"// +'Speed of typing:'+(number_Word) 
     clearInterval(timerVar)

     //alert("Accuracy: "+acc)
     getNextQuote()
 }


})

function getQuotes(){
    return fetch(apiUrl).then(response => response.json()).then(data => data.content)
}

async function getNextQuote(){
    const quote = await getQuotes()
    //console.log(quote.length)
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(element => {
        const characterSpace = document.createElement('span')
       
        characterSpace.innerHTML = element
        
        quoteDisplayElement.appendChild(characterSpace)
    })
    quoteInputElement.value = null
    startTimer() 
}
let startTime
function startTimer(){
    timerElement.innerText=0
    startTime = new Date()
    timerVar = setInterval(() =>{
        timer.innerText = getTimerTime()
        },1000)
}
function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000)
}
getNextQuote()

