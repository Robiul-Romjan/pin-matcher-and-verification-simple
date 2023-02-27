
function generatePin(){
    let generatePinRandom = Math.round(Math.random() * 10000);
     return generatePinRandom;
 };

function getPin(){
   const randomPin = generatePin();
   let randomPinString = randomPin + "";
   if(randomPinString.length === 4){
    return randomPin;
   }
   else{
     return getPin();
   }
};

