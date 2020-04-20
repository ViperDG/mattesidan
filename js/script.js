document.getElementById("submit").onclick = () => {
    const a = parseInt( document.getElementById("a").value);
    const b = parseInt( document.getElementById("b").value);
    const c = pyth(a, b);
    document.getElementById("c").innerHTML = c;
}

function pyth(a, b){
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
