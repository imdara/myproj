function disp(n) {
    document.getElementById("input").value+=n;
}
function eq() {
    let final=document.getElementById("input").value;
    let res=eval(final);
    document.getElementById("input").value=res;
}

function clear() {   
    document.getElementById("input").value="";
    console.log("hello");
}