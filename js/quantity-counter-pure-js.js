/*
function minus() {
     var value = document.getElementById("count").value;

     if (value > 1) {
         value--;
     } else {
         value = 1;
     }

     document.getElementById("count").value = value;
 }

 function plus() {
     var value = document.getElementById("count").value;

     if (value < 100) {
         value++;
     } else {
         value = 100;
     }

     document.getElementById("count").value = value;
 }
*/

const counter = document.getElementById('count')
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn')

let counterValue = counter.value;

minusBtn.onclick = () => {
    if (counterValue > 1) {
         counterValue--;
     } else {
         counterValue = 1;
     }
    
    counter.value = counterValue;
}

plusBtn.onclick = () => {
    if (counterValue < 100) {
         counterValue++;
     } else {
         counterValue = 100;
     }
    
    counter.value = counterValue;
}