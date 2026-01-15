// this function toggles dark mode on and off
function toggleTheme(){
    document.body.classList.toggle("dark-mode");
    document.getElementById("dark").classList.toggle("dark-mode");
    document.getElementById("dark1").classList.toggle("dark-mode");
    document.getElementById("dark2").classList.toggle("dark-mode");
};

// counter for crochet projects
let count=0;
function addProject(){
    count++;
    document.getElementById("count").innerText= count;
};
//tools js
const tools=[
    {
        name: "Yarn Calculator" , 
        type: "calculator" ,
        desc: "Calculate yarn amount needed" ,
        html: `
        <input type="number" id="meters" placeholder="Meters per ball">
        <input type="number" id="balls" placeholder="Number of balls">
        <button onclick="calcYarn()">Calculate</button>
        <p id="result"></p>
        `
    } , 
    {
        name: "Pattern Generator" , 
        type: "generator" ,
        desc: "Generate random crochet patterns" ,
        html: `
        <button onclick="generatePattern()">Generate</button>
        <p id="pattern"></p>
        `
    } , 
    {
        name: "Color Picker" , 
        type: "color" ,
        desc: "Pick a color theme" ,
        html: `
        <input type="color" onchange="changeColor(this.value)">
        `
    } ,
    {
        name: "Yarn Info" , 
        type: "info" ,
        desc: "Learn about yarn types" ,
        html: `
        <ul>
          <li>Cotton - summer projects</li>
          <li>Wool - winter warmth</li>
          <li>Acrylic - budjet friendly</li>
          </ul>
        `
    } ,
    {
        name: "Yarn Quiz" ,
        type: "fun" ,
        desc: "Which yarn are you?" ,
        html: `
        <button onclick="quiz()">Take Quiz</button>
        <p id="quizResult"></p>`
    }
];
const container=document.getElementById("toolsContainer");
const modal=document.getElementById("modal");
const modalTitle=document.getElementById("modalTitle");
const modalDesc=document.getElementById("modalDesc");
const modalTool=document.getElementById("modalTool");
/* Display tools*/
function showTools(list){
    container.innerHTML="";
    list.forEach(tool => {
        const card=document.createElement("div");
        card.className="tool-card";
        card.innerHTML=`<h3>${tool.name}</h3><p>${tool.type}</p>`;
        card.onclick=()=> openModal(tool);
        container.appendChild(card);
    });
}
showTools(tools);
/*Modal*/
function openModal(tool){
    modal.classList.remove("hidden");
    modalTitle.textContent = tool.name;
    modalDesc.textContent = tool.desc;
    modalTool.innerHTML = tool.html;
    document.getElementById("close").style.display="block";
};
document.getElementById("closeModal").addEventListener("click" , function(){
    document.getElementById("close").style.display="none";
})
/*Tool functions*/
function calcYarn(){
    const meters=document.getElementById("meters").value;
    const balls=document.getElementById("balls").value;
    document.getElementById("result").textContent="Total meters: "+(meters*balls);
    document.getElementById("close").style.display="block";
};
function generatePattern(){
    const patterns=["Granny Square" , "Shell Stitch" , "V Stitch"];
    document.getElementById("pattern").textContent=patterns[Math.floor(Math.random()*patterns.length)];
    document.getElementById("close").style.display="block";
};
function changeColor(color){
    document.body.style.background=color;
    document.getElementById("close").style.display="block";
};
function quiz(){
    const types=["Cotton" , "Wool" , "Acrylic"];
    document.getElementById("quizResult").textContent="You are: "+types[Math.floor(Math.random()*types.length)];
    document.getElementById("close").style.display="block";
};