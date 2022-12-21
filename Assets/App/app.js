const body = document.querySelector("body");
const header = document.querySelector(".header");
const content = document.querySelector(".content")
const themeChanger = document.querySelector("[type='range']");

themeChanger.addEventListener("change", (e) => {
    if(e.target.value === "1") {
        body.classList.add("theme-one");
        header.classList.add("theme-one");
        content.classList.add("theme-one");
        body.classList.remove("theme-two");
        header.classList.remove("theme-two");
        content.classList.remove("theme-two");
        body.classList.remove("theme-three");
        header.classList.remove("theme-three");
        content.classList.remove("theme-three");
    }
    if(e.target.value === "2") {
        body.classList.remove("theme-one");
        header.classList.remove("theme-one");
        content.classList.remove("theme-one");
        body.classList.add("theme-two");
        header.classList.add("theme-two");
        content.classList.add("theme-two");
        body.classList.remove("theme-three");
        header.classList.remove("theme-three");
        content.classList.remove("theme-three");
    }if(e.target.value === "3") {
        body.classList.remove("theme-one");
        header.classList.remove("theme-one");
        content.classList.remove("theme-one");
        body.classList.remove("theme-two");
        header.classList.remove("theme-two");
        content.classList.remove("theme-two");
        body.classList.add("theme-three");
        header.classList.add("theme-three");
        content.classList.add("theme-three");
    }
});

let result = document.getElementById("display");

let calculate = (number)=>{
    display.value += number;
}
let resultCal=()=>{
    try{
        display.value = eval(display.value)
    }catch(err){
        alert("Input the correct data!")
    }
}
function clr(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0, -1)
}

























