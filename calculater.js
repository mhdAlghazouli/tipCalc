
function fn1(){
    let bill = document.getElementById("Bill-input").value;
    let tipPer = document.getElementById("Tip-per-input").value;
    let pple = document.getElementById("People-input").value;
    document.getElementById("result").innerHTML = "You should tip  : " + ((tipPer / 100 ) * (bill)) / pple + "$";
    
}
