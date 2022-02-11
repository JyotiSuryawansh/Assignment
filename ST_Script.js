const apiUrl = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

quoteInputElement.addEventListener('input',() => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    let correct = true
    arrayQuote.forEach((characterSpan,index) => {
        const character = arrayValue[index]
        if(character == null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        }
        else if (character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else{
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })
    if(correct) getNextQuote()
})

function getQuotes(){
    return fetch(apiUrl).then(response => response.json()).then(data => data.content)
}

async function getNextQuote(){
    const quote = await getQuotes()
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
    setInterval(() =>{
        timer.innerText = getTimerTime()
    },1000)
}
function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000)
}
getNextQuote()











// const quoteContainer = document.getElementById("container")
// const quoteText = document.getElementById("quote")
// const authorText = document.getElementById("author")
// const newQuoteBtn = document.getElementById("new-quote")
// const loader = document.getElementById("loader")

// let apiQuotes=[]

// function showLoadingSpinner(){
//     loader.hidden=false;
//     quoteContainer.hidden = true;
// }

// function removeLoadingSpinner(){
//     quoteContainer.hidden = false
//     loader.hidden = true
// }
// async function getQuotes(){
//     showLoadingSpinner();
    

//     try{
//         const response = await fetch(apiUrl)
//         apiQuotes = await response.json()

//         newQuote()
//     }catch(error){
//         console.log(error)
//     }

// }

// function newQuote(){
//     showLoadingSpinner()

//     setTimeout(function(){
//         const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]

//         console.log(quote)
//         // {text: "Quote text", author: "Author Name"}
    
//         if(!quote.author){
//             authorText.textContent = 'Unknown'
//         }else{
//             authorText.textContent = quote.author
//         }
//         if(quote.text.length>100){
//             quoteText.classList.add("long-quote")
//         }else{
//             quoteText.classList.remove("long-quote")
//         }
//         quoteText.textContent = quote.text;
//         removeLoadingSpinner()

//     },200)
// }

// getQuotes();

// newQuoteBtn.addEventListener("click", newQuote)