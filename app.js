eventListener();
function eventListener(){
    document.getElementById("change-color").addEventListener("click",getRandomNumbers);
}
function getRandomNumbers(){
    number1 = Math.round(Math.random()*255);
    number2 = Math.round(Math.random()*255);
    number3 = Math.round(Math.random()*255);
    changeColorOfBody(number1,number2,number3);
    showAlert();
    
}
function changeColorOfBody(number1,number2,number3){
    document.getElementsByTagName("body")[0].style = `background-color:rgb(${number1},${number2},${number3})`;
    document.getElementsByClassName("color")[0].textContent = `rgb (${number1}, ${number2}, ${number3})`;
}
function showAlert(){
    const newpar = document.createElement("p");
    newpar.textContent = "Background-color is changed succesfully";
    const footer = document.getElementsByClassName("footer")[0];
   if (footer.childElementCount ==0){
    footer.appendChild(newpar);
    setTimeout(function(){
        newpar.remove();
    },1000);
   }
    
}