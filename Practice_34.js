// function validate(){
//     let email="nvkd@fjg.com"
//     let flag=false
//     let index 
//     let len=email.length
//     for(let i=0;i<len;i++){
//         //console.log("Enter for loop")
//         console.log(email.charAt[i])
//         if(email.charAt[i]=='@'){
//             console.log("@ present")
//              flag =true
//               index=i
//         }
//         if(email.charAt[i]=='.' && email.charAt[i+1]!=undefined && email.charAt[i+2]!=undefined){
//             console.log("Email is Valid")
//         }
//     }
// }
// validate()
// const inputEl = document.getElementById("input1")

//     inputEl.addEventListener("blur", checkEmail)

//     function checkEmail() {
//       const inputValue = inputEl.value
//       let indexOfAtTheRate = inputValue.indexOf("@")

//       if (inputValue.includes(" "))
//         window.alert("Email Should Not Contain Any Space")

//       if (indexOfAtTheRate == -1)
//         window.alert("@ is missing")

//       if (indexOfAtTheRate == 0)
//         window.alert("plase enter part before @")

//       if (indexOfAtTheRate == inputValue.length - 1)
//         window.alert("plase enter part following @")

//     }

async function abc(){
    // try{
    //     if(1<2){
    //         throw 'False value'
    //     }
    // }catch(error)
  return await  setTimeout(function(){
        return Promise.resolve('Resolve')
    },3000)

}
async function display(){
    
    return await abc().then(function(resolveMessage){
        return resolveMessage
    })
}
abc().then(function(resolveMessage){
    console.log(resolveMessage)
})