let count=1
let display=document.querySelector(".display")
let totalkdv=document.querySelector(".total-kdv span")
let totalPrice=document.querySelector(".total-nok span")

const productPrice = 1000

function increment(){
    count=count+1;
    display.innerHTML=count;
    
    totalkdv.innerHTML= (productPrice * count) * 18 / 100 
    totalPrice.innerHTML = productPrice * count
}
function dencrement(){
    count=count-1;
    display.innerHTML=count;
    
    totalkdv.innerHTML= (productPrice * count) * 18 / 100 
    totalPrice.innerHTML = productPrice * count
}
console.log(totalkdv);


