// const executeOrder= function(callback){
//     console.log('Order Placed')
//     setTimeout(function(){
//         console.log('Order Received!')
//         console.log('chef started preparing')
//         setTimeout(function(){
//             console.log("pizza Sauce added")
//             setTimeout(function(){
//                  console.log('First layer of cheeze added')
//                  setTimeout(function(){
//                     console.log('Toppings added')
//                     setTimeout(function(){
//                        console.log('Final layer of cheeze')
//                        setTimeout(function(){
//                           console.log('Pizza Baked')
//                           setTimeout(function(){
//                              console.log('Oregeno added and packed')
//                              callback()
//                           },4000)
//                        },6000)
//                     },2000)
//                  },4000)
//               },3000)
//          },5000)
//       },2000)
// }
//executeOrder(function(){
 //  console.log('Order is ready and handed over to the Zomato Guy!')
//})
// let bankBalances=[30000, 10000, 50000, 20000, 40000]
// let b=[23,23,74]
// let UpdatedBalance=bankBalances.map( element => {
//      let e=String(element)[0]
//      if(e%2==0){
   
//         return element+element*20/100
//      }
//      else if(e%2!=0){
//      return element+element*35/100
//      }
//    })
// console.log(UpdatedBalance)
// let x=5
// let y=5
// let promise = new Promise(function(resolve,reject){
//              if(x===y)  
//              resolve('Both tha values are equal') 
//              else if(x<y) 
//    reject()

// })
// // console.log(promise)
// // promise.then(function(resolvedMessage){
// //    console.log('any',resolvedMessage)
// // },function(rejectedMessage){
// //    console.log('any',rejectedMessage)})

//    console.log(promise)
//    promise.then(function(resolvedMessage){
//       console.log('any',resolvedMessage)
//    }).catch(function(rejectedMessage){
//       console.log('any',rejectedMessage)})
   

      // let promise = new Promise(function(resolve,reject){
      //   setTimeout(function(){
      //      resolve('Finally')
      //   },5000)
      // })


      // console.log(promise)
      //    promise.then(function(resolvedMessage){
      //       console.log('any',resolvedMessage)
      //    }).catch(function(rejectedMessage){
      //       console.log('any',rejectedMessage)})
      //   console.log("end code") 

// let arr=[1,0,3,2,4]      
// let n=arr.length
// arr.sort((a,b) => a-b)
// let i
// for(i=0;i<n;i++){
//    if(arr[i]!=i){
//       break
//    }
// }
// console.log(arr)
// console.log(i)

let promise1 = new Promise(function(resolve,reject){
setTimeout(function(){
   resolve("Resolving Promise 1")
},2000)
})
let promise2 = new Promise(function(resolve,reject){
   setTimeout(function(){
      resolve("Resolving Promise 2")
   },1000)
   })
   
   promise1.then(function(resolvedMessage){
      console.log(resolvedMessage)
      return promise2
   }).then(function(resolvedMessage){
      console.log(resolvedMessage)
   })
// let students=[
//    {
//    Name:'john',
//    batch:'Batch 11',
//    marks:{
//       english:'38',
//       maths:'72',
//       science:'82',
//       hindi:'21',
//       social:'48'
//    }
// },
//    {
//       Name:'sita',
//       batch:'Batch 12',
//       marks:{
//          english:'74',
//          maths:'82',
//          science:'32',
//          hindi:'42',
//          social:'28'
//       }
//    },
//       {
//          Name:'shyam',
//          batch:'Batch 13',
//          marks:{
//             english:'28',
//             maths:'92',
//             science:'63',
//             hindi:'81',
//             social:'61'
//          }
//    },
//    {
//       Name:'lakshman',
//       batch:'Batch 14',
//       marks:{
//          english:'48',
//          maths:'83',
//          science:'63',
//          hindi:'71',
//          social:'63'
//       }
// }
// ]

// for(x of students)   {  
   
//      let total=Number(x.marks.english)+Number(x.marks.maths)+Number(x.marks.science)+Number(x.marks.hindi)+Number(x.marks.social)
//      console.log(total) 
//  }
 //console.log(0.1+0.2!=0.3)

// let TotalMarks = students.map((student) =>{
//    let total=0
//    for(subject in student.marks){
//       total =total+Number(student.marks[subject])
//    }
//    return total
// })
// console.log(TotalMarks)

// let MarksChecks = students.map(element =>{
//    let count=0
//    let sub=0
//    for (let subject in element.marks){
//       count++
//      if(element.marks[subject] >30)
//          sub++
//    }
//    if(sub==count)
//       return element.Name
// })
// let data = MarksChecks.filter(element => element!==undefined)
// console.log(data)
const arr=[]
for(let item of arr){
   setTimeout(() =>{ console.log(item)},item)
}
