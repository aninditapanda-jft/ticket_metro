const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ,"k", "l", "m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const fareList = []

let fares =0;
for(let i=0;i<arr.length;i++){
    if(i%4==0){
        fares=fares+10;
    }
    fareList[i]=fares
}
console.log(fareList)
// const fareList = {
//     1: 10,
//     2: 10,
//     3: 10,
//     4: 10,
//     5: 20,
//     6: 20,
//     7: 20,
//     8: 20,
//     9: 30,
//     10: 30,
//     11: 30,
//     12: 30,
//     13: 40,
//     14: 40,
//     15: 40,
//     16: 40,
//     17: 50,
//     18: 50,
//     19: 50,
//     20: 50,
//     21: 60,
//     22: 60,
//     23: 60,
//     24: 60
//     // 25: 70,
//     // 26: 70
// }

const source = document.getElementById('slct1');
const destination = document.getElementById('slct2');
const fare = document.getElementById('fare');

const paymentMode = document.getElementById('payment');

function selected(arr) {
    
    for ( var i = 0 ; i <= arr.length-1 ; i++){
        document.getElementById('slct1').innerHTML+=`<option>${arr[i]}</option>`;
        document.getElementById('slct2').innerHTML+=`<option>${arr[i]}</option>`;
    }
}

selected(arr);


function calculateFare() {

    const sourceValue = arr.indexOf(source.value);
    const destinationValue = arr.indexOf(destination.value);
    const paymentModeValue =paymentMode.value;
    console.log(sourceValue);
    console.log(destinationValue)

    let distance = 0;

    if (destinationValue > sourceValue) 
        distance = destinationValue - sourceValue;
    else if (sourceValue > destinationValue) 
        distance = sourceValue - destinationValue;
    else return alert("Please Select Different Station");

    let tempFare = fareList[distance];

    let finalFare = 0;

    if (paymentModeValue === "Card") { 

        finalFare = tempFare - ((10/100)) * tempFare;

    }
    else {
        finalFare = tempFare;
    }
    
    if (finalFare < 10) {
        finalFare = 10;
    }
    else if (finalFare > 60) {
        finalFare = 60;
    }

    fare.value = finalFare;

}


function resetValue () {

    source.value = "";
    destination.value = "";
    paymentMode.value = "Chooseio";
    fare.value = "";
}



