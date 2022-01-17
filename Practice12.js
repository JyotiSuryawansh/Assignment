const obj={
    batch:"Baatch 11",
    name:"jyoti",
    techStack:"mern"
}
const obj2={
    ...obj
}
let arr1=[3,4]
let arr2=[5,7,8]
let concat=[...arr1,...arr2]
arr=[1,2,3,45,5,{...obj}]
console.log(concat)