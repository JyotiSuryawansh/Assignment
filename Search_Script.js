const searchxyz = document.querySelector('.search');
const btnxyz = document.querySelector('.btn');
const inputxyz = document.querySelector('.input');

btnxyz.addEventListener("click",function(){
    searchxyz.classList.toggle("active")
    inputxyz.focus()
})
// let arr=[1,2,1,1,3,8,5,1]
// let newarr =[]
// function func(value){
    
//     if(value==1){
//         newarr.push(value)
//     }
// }
// arr.forEach(func)
// console.log(newarr)
