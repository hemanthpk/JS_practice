const count = document.getElementById("cart");
var c = count.textContent;
console.log(c);
function plus() {
    if (typeof(c) != "number"){
        c++;
    }
    else{
        c = 1;
    }
    console.log(c);
    typeof(c);
}
function minus() {
    if(c<=1) {
        c = 'Add to cart';
    }
    else if (typeof(c) == "number"){
        c--;
    }
    console.log(c);
    typeof(c);
}