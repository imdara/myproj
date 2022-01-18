function disp(n) {
    document.getElementById("result").value+=n;
}
function eq() {
    let final=document.getElementById("result").value;
    let res=eval(final);
    document.getElementById("result").value=res;
}

function backspace() {
    document.getElementById('result').value=document.getElementById('result').value.slice(0,document.getElementById('result').value.length-1);
}
