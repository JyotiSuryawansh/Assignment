var num_1 = document.getElementById("num1").value
var num_2 = document.getElementById("num2").value
var operator = document.getElementById("operator")
var result = document.getElementById("result")
//console.log(result)
console.log(num_1)
console.log(num_2)
function calculater(){
    if (num_1.value==="" || num_2.value===""){
        alert("Please make sure  you have entered both the operands")
        result.innerHTML = "Number not  Entered"
    }else{
    var num1 = Number(num_1)
    var num2 = Number(num_2)
    var op = operator.value
    }
    if(op==="-"){
        result.value=num1-num2
        console.log(result.value)
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
 button.addEventListener("click",calculater())