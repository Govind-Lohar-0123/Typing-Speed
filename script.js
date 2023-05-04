let start = document.getElementsByClassName("start")[0];
let text = document.getElementsByClassName("text")[0];
let ans = document.getElementsByTagName("h3")[0];
text.placeholder = "";
start.addEventListener("click", () => {
    let value = text.disabled;
    console.log(value);
    if (value) {
        text.removeAttribute("disabled");
        start.innerHTML = "Done";
        text.value = "";
        text.placeholder = "Rewrite Code";
        text.focus();
    }
    else {
        text.setAttribute("disabled", "0");
        start.innerHTML = "Start";
        text.placeholder = "";
        showResult();
    }

})
let count = 0;
function showResult() {
    let textLength = text.length;
    let v = text.value.split(" ");
    count = 11 - v.length;
    
    if (v.length == 1 && v[0] == '') { 
        ans.innerHTML="I Hope If You Will Try You Can do this"
     }
    else {

        ans.innerHTML = `You Typed Total at ${"13"} Words Per Minutes. ${count} Correct Out Of 11 Words And The Total Number Of Error Are ${count}`;
    }
    
}
