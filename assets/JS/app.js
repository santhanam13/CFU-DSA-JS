
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
document.getElementById('length').addEventListener('change', charLength)
 
function pass_code(){
    let  empty_side = charLengths
    let password
    let output=" ";
    let capital = document.getElementById("uppercase").checked
    let arr =   [...Array(26)].map((_, i) => String.fromCharCode(i + (capital ? 65 : 97)))
    console.log(arr);
    for(i=1;i<=empty_side;i++){
    if (capital == true) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
     password=item
     output=output+password
     document.getElementById('password__result').value = output;
    }
}
}
   