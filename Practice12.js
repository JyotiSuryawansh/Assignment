// const obj={
//     batch:"Baatch 11",
//     name:"jyoti",
//     techStack:"mern"
// }
// const obj2={
//     ...obj
// }
// let arr1=[3,4]
// let arr2=[5,7,8]
// let concat=[...arr1,...arr2]
// arr=[1,2,3,45,5,{...obj}]
// console.log(concat)
// let fname="Jyoti"
// let lname = "Suryawanshi"
// let obj1={
//     fname:fname,
//     lname:lname
// }
// console.log(obj1)
// let element={
//     fname:"jyoti",
//     lname:"suryawanshi",
//     address:{
//         city:"pune",
//         state:"maha"
//     }
// }
// let {fname,lname,address:{city,state}}=element
// console.log(fname,lname,city,state)
// let arr=[1,2,3]
// let [first,second,third]=arr
// console.log(first,second,third)
//  var a=5
//  var b=8
// // a=a+b
// // b=a-b
// // a=a-5
// var arr =[a,b]
// var [b,a]=arr
// //var [b,a]=[a,b]
// console.log(a,b)
// let obj12={
//     acv:"amber",
//     class:11,
//     values:"1233"
// }
// console.log(Object.entries(obj12))

// try{
//     let x='3+5'
//     let z=eval(x)
//     a=-10/0
//     console.log(a)
//     let v=-10
//     if(v<0)
//      throw new 'Invalid Input'
  

// }catch(error){
// console.log(error)
// }
// console.log('end of code')
// console.log(Object.entries(element))
// function abc(...args){
//     console.log(args)
// }
// abc("jyoti","Mrunal","lakshmi")
//let x=5
// function abc(){
//     let y=10
//     return function(){
//         return y
//     }
    
// }
// const innerFunction = abc()
// //console.log(innerFunction())
// console.log(abc()())

// let arr=[
//     {name:'Amber',batch:'Batch 11', likesCream:false},
//     {name:'Mrunal',batch:'Batch 12', likesCream:true},
//     {name:'Jyoti',batch:'Batch 11', likesCream:false},
//     {name:'Anirban',batch:'Batch 12', likesCream:true},
//     {name:'lakshmi',batch:'Batch 10', likesCream:false},
// ]

// // let studentWhoLikesIceCream=arr.filter(function anc(element,index){
// //      return element.likesCream==true
// //})
// let student = arr.filter(element => element.likesCream)
// // console.log(student)
// // //console.log(studentWhoLikesIceCream)
// console.log(this)
// let saurabh = {
//        firstName:'Jyoti',
//        lastName:'Suryawanshi',

// }
// function fullName(){
//    console.log(this.firstName+" "+this.lastName)

// }
// let fullName2 = fullName.bind(saurabh)
// fullName2()

// function fullName(city,state){
//     console.log(this.firstName+" "+this.lastName+" is from "+city+" in "+state)

// }
// fullName('mumbai','maharashtra')
// //let fullName2 = fullName.call(saurabh,'mumbai','Maharashtra')
// let fullName2 = fullName.apply(saurabh,['Mumnai','Maharashtra'])

// console.log(1)
//  console.log(2)
//  console.log(4)
// setTimeout(()=>{
//     console.log(5)

// },20)

// console.log(6)
// for(let i=0;i<10;i++){
//     x=i
// }
//let i=10
// setInterval(function (){
    
//     console.log(Date.now())

// },200)

// function fun1(callback){
//     setTimeout(function (){
//          console.log('In Function 1')
//          callback()
//     } ,3000) 
// }
// function fun2(){
//     console.log("IN Function 2")
// }

// fun1(fun2)
// //fun2()

let arr=[
        {name:'Amber',batch:'Batch 11', likesCream:false},
        {name:'Mrunal',batch:'Batch 11', likesCream:true},
        {name:'Jyoti',batch:'Batch 11', likesCream:false},
        {name:'Anirban',batch:'Batch 11', likesCream:true},
        {name:'lakshmi',batch:'Batch 10', likesCream:true},
    ]
    let studentWhoLikesIceCream=arr.map(function anc(element){
            if(element.likesCream==true && element.batch=='Batch 11')
            {

                return element.name
            }
        })
       let studentop= studentWhoLikesIceCream.filter(student =>{
           return student
       }) 
    console.log(studentop) 
    // let studentWhoLikesIceCream=arr.filter(student =>student.likesCream)
    // console.log(studentWhoLikesIceCream)

// let obj={
//     name:"Jyoti",
//     rollno:1,
//     address:"Pune",
//     stste:"Maharastra"
// }
// let arr=[8,7,3,4,5]
// for(let x of arr){
//     console.log(x)
// }

