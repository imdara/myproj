function disp(n) {
    document.getElementById("input").value+=n;
}
function eq() {
    let final=document.getElementById("input").value;
    let res=eval(final);
    document.getElementById("input").value=res;
}
