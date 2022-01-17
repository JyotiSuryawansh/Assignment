var num_1 = document.getElementById("num1")
var num_2 = document.getElementsById("num2")
var operator = document.getElementById("operator")
var result = document.getElementById("result")
console.log(result)
function calculater(){
    if (num_1.value==="" || num_2.value===""){
        alert("Please make sure  you have entered both the operands")
        result.innerHTML = "Number not  Entered"
    }else{
    var num1 = Number(num_1.value)
    var num2 = Number(num_2.value)
    var op = operator.value
    }
    if(op==="-"){
        result.value=num1-num2
    }
    else if(op==="+"){
        result.value=num1+num2
    }    
    else if(op==="*"){
        result.value=num1*num2
    }
    else if(op==="/"){
       result.value=num1/num2
    }
}
button.addEventListener("click",calculater)