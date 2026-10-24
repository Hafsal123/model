const toggleBtn = document.querySelectorAll(".toggle-container .toggle-btn");
const voiceWave = document.querySelector(".voice-wave");

toggleBtn.forEach(btn => {
    
    btn.addEventListener("click", () =>{

        document.querySelector(".toggle-btn.active-toggle").classList.remove('active-toggle');
        btn.classList.add('active-toggle');


        if (btn.textContent.trim().includes("Voice")) {
            voiceWave.classList.add("show");
        } else {
            voiceWave.classList.remove("show");
        }

    });
});

const navBtns = document.querySelectorAll(".nav-buttons .nav-btn");

navBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        document.querySelector(".nav-btn.active").classList.remove("active");
        btn.classList.add("active");
    })

});

const voiceClose = document.getElementById("voiceClose");

voiceClose.addEventListener("click", function(){
    voiceWave.classList.remove("show")
});

const openAi = document.getElementById("openAi");

openAi.addEventListener("click" , function(){
    window.location.href = "Ai.html";
});




const recognition = new webkitSpeechRecognition();

recognition.lang = "en-IN";
recognition.continuous = true;

recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0]
        .transcript.toLowerCase();

    if (text.includes("mia")) {
        window.location.href = "Ai.html";
    }
};

recognition.start();

const card = document.querySelectorAll(".product-card");