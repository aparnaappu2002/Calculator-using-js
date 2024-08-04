function buttonclick(val){
    document.getElementById("output").value+=val
}

function buttonclear()
{
    document.getElementById("output").value=""
}

function equalclick()
{
    var text =document.getElementById("output").value
    
    document.getElementById("output").value=eval(text)
   
}
