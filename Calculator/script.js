let result = document.getElementById("inputtext");

let calculate=(number)=>{
    result.value += number;     //result.value = result.value+number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Please enter the valid input 🙂");   
    }
}

function clr(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0,-1);     //slice take starting and ending point(0,-1)
}