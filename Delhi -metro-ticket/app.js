const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ,"k", "l", "m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const fareList = {
    1: 10,
    2: 10,
    3: 10,
    4: 10,
    5: 20,
    6: 20,
    7: 20,
    8: 20,
    9: 30,
    10: 30,
    11: 30,
    12: 30,
    13: 40,
    14: 40,
    15: 40,
    16: 40,
    17: 50,
    18: 50,
    19: 50,
    20: 50,
    21: 60,
    22: 60,
    23: 60,
    24: 60,
    25: 70,
    26: 70
}

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

    let distance = 0;

    if (destinationValue > sourceValue) distance = destinationValue - sourceValue;
    else if (sourceValue > destinationValue) distance = sourceValue - destinationValue;
    else return alert("Please Select Different Station");

    let tempFare = fareList[distance];

    let finalFare = 0;

    if (paymentModeValue === "Card") { 

        finalFare = tempFare - ((10 / 100) * tempFare);

    }
    else {
        finalFare = tempFare;
    }
    
    if (finalFare < 10) {
        finalFare = 10;
    }
    else if (finalFare > 70) {
        finalFare = 70;
    }

    fare.value = finalFare;

}


function resetValue () {

    source.value = "";
    destination.value = "";
    paymentMode.value = "Select Any option";
    fare.value = "";

}


// let v=document.getElementById("btn1");
// v.addEventListener("click",function(){

// })
// function populate(select1,select2) {
//     var s1 = document.getElementById(select1)
//     var s2 = document.getElementById(select2)

//     s2.innerHTML = "";

//     if(s1.value == "a" || "b" || "c" || "d" || "e" || "f" || 
//         "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" ||
//          "o" || "p" || "q"|| "r"|| "s"|| "t"|| "u"|| "v" || "w" || 
//          "x" || "y" || "z"){
//         var optionArray = ['a|A', 'b|B', 'c|C', 'd|D','e|E','f|F','g|G', 
//         'h|H','i|I','j|J','k|K','l|L', 'm|M','n|N','o|O','p|P','q|Q','r|R',
//         's|S','t|T','u|U','v|V','w|W' ,'x|X' ,'y|Y' ,'z|Z']
//     }

//     for( let option in optionArray){
//         var pair = optionArray[option].split('|')
//         var newOption = document.createElement("option")
//         newOption.value = pair[0]
//         newOption.innerHTML =pair[1]
//         s2.options.add(newOption)
//     } 
// }


// let wrapper=document.getElementsByClassName('warraper');

// wrapper.addEventListener('click',function(){
//    console.log();
// });