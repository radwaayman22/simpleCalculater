var exp, num1, num2, result;
var add = document.getElementById("add ");
add.addEventListener('click', function(e) {
    exp = '+';
    // console.log('add');
});
var Subtract = document.getElementById("Subtract ");
Subtract.addEventListener('click', function(e) {
    exp = '-';
    // console.log('Subtract');
});
var mul = document.getElementById("mul ");
mul.addEventListener('click', function(e) {
    exp = '*';
    //console.log('mul');
});
var div = document.getElementById("div ");
div.addEventListener('click', function(e) {
    exp = '/';
    // console.log('div');
})
var equal = document.getElementById("equal ");
equal.addEventListener('click', function(e) {
    // console.log('equal');
    var num1 = parseFloat(document.getElementById("n1").value);
    // console.log(num1)
    var num2 = parseFloat(document.getElementById("n2").value);
    // console.log(num2)
    switch (exp) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;

            break;
        case '*':
            result = num1 * num2;

            break;
        case '/':
            result = num1 / num2;

            break;


        default:
            result = "enter expression"

    }
    document.getElementById("res").value = result;
});
var rem = document.getElementById("rem ");
rem.addEventListener('click', function(e) {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("res").value = "";
    exp = "";
});