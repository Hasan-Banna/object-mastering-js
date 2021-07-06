var name = 'Kuddus'; //global variable
function add (num1, num2){
    var result = num1 + num2; //result is non gloabl
    console.log("name inside", name);
    function double (num){ // double function is non global eitake bahir theke call kora jabe na.
        return num * 2;
    }
    var total = double(result);
    return total;
}

console.log("name outside", name);
var sum = add(13, 21);
console.log(sum);