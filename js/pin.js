
const generatePinInput = document.getElementById("generate-input-field");
const submitInputField = document.getElementById("submit-input-field");

document.getElementById("generate-pin-btn").addEventListener("click", function() {
       generatePinInput.value = getPin();
});

document.getElementById("calculaor").addEventListener("click", function(e){
    let calBtn = e.target.innerText;
    if(!isNaN(calBtn)){
       const priviousCalBtn = submitInputField.value;
       const newCalBtn = priviousCalBtn + calBtn;
       submitInputField.value = newCalBtn;
    }
    else if(calBtn === "C"){
        submitInputField.value = "";
    }
});

document.getElementById("submit-btn").addEventListener("click", function(){
    let successMessage = document.getElementById("success-message");
    let failMessage = document.getElementById("fail-message");
    if(generatePinInput.value === submitInputField.value){ 
        successMessage.style.display = "block";
        failMessage.style.display = "none";
    }
    else{   
        failMessage.style.display = "block";
        successMessage.style.display = "none";
    }
});