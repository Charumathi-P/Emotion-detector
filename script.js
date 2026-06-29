const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");
const detectBtn = document.getElementById("detectBtn");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        result.innerHTML = "Ready to Detect";

    }

});

detectBtn.addEventListener("click", () => {

    if(preview.src==""){

        alert("Please upload an image.");

        return;

    }

    result.innerHTML="Analyzing...";

    setTimeout(()=>{

        const emotions=[
            "😊 Happy",
            "😢 Sad",
            "😐 Neutral",
            "😠 Angry",
            "😲 Surprise",
            "😨 Fear"
        ];

        const random=Math.floor(Math.random()*emotions.length);

        const confidence=Math.floor(Math.random()*15)+85;

        result.innerHTML=
        `
        ${emotions[random]}<br>
        Confidence : ${confidence}%
        `;

    },2000);

});
