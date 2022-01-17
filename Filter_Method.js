arr=[1,2,1,1,3,8,2,1,1]
let newArr = arr.filter((element,i) =>{
      return arr.indexOf(element)===i//arr.lastIndexOf(element)
})

console.log(newArr)
// let arr=[]
// let arr1
// if(arr1==undefined){
//     console.log("Empty Arr");
// }