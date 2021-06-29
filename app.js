const historybtn=document.querySelector("#history_btn");
const visionbtn=document.querySelector("#vision_btn");
const goalsbtn=document.querySelector("#goals_btn");

const historytext=document.querySelector(".history_text");
const visiontext=document.querySelector(".vision_text");
const goalstext=document.querySelector(".goals_text");

historytext.classList.remove("hidden");
historybtn.classList.add("active_span")

historybtn.addEventListener("click",()=>{
    document.getElementById("image").src='img/1.jpg';
    historytext.classList.remove("hidden");
    historybtn.classList.add("active_span");

    visiontext.classList.add("hidden");
    visionbtn.classList.remove("active_span");

    goalstext.classList.add("hidden");
    goalsbtn.classList.remove("active_span");
})


visionbtn.addEventListener("click",()=>{
    document.getElementById("image").src='img/2.jpg';
    visionbtn.classList.add("active_span");
    visiontext.classList.remove("hidden");

    historytext.classList.add("hidden");
    historybtn.classList.remove("active_span")

    goalstext.classList.add("hidden");
    goalsbtn.classList.remove("active_span");
})

goalsbtn.addEventListener("click",()=>{
    document.getElementById("image").src='img/3.jpg';
    goalstext.classList.remove("hidden");
    goalsbtn.classList.add("active_span");

    visiontext.classList.add("hidden");
    visionbtn.classList.remove("active_span");

    historytext.classList.add("hidden");
    historybtn.classList.remove("active_span")
})