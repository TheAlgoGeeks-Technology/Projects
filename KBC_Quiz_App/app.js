console.log("Hello");
    let currentQuestion = 0;
    let userChoices = {}
    const questions = [
  ["What is the name of the longest river in Africa?", "Niger", "Congo", "Zambezi", "Nile", 3],
  ["Who discovered Oxygen?", "Karl William Scheele", "Michale Jackson", "Shah Rukh Khan", "Hema Malini", 0],
  ["What is the capital of Australia?", "Sydney", "Melbourne", "Brisbane", "Canberra", 3],
  ["What is the highest mountain in the world?", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley", 1],
  ["What is the chemical symbol for gold?", "G", "Ag", "Au", "Pb", 2],
  ["What is the largest ocean in the world?", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean", 3],
  ["What is the name of the world's largest coral reef system?", "Great Barrier Reef", "Belize Barrier Reef", "Andros Barrier Reef", "Ap Reef", 0],
  ["What is the unit of measurement for electrical resistance?", "Ampere", "Ohm", "Volt", "Watt", 1],
  ["Who painted the Mona Lisa?", "Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh", 0],
  ["Which planet in our solar system has the most moons?", "Jupiter", "Saturn", "Uranus", "Neptune", 0]
];

//   const questions = [
//   ["What is the name of the longest river in Africa?", "Niger", "Congo", "Zambezi", "Nile", 3],
//   ["Who discovered Oxygen?", "Karl William Scheele", "Michale Jackson", "Shah Rukh Khan", "Hema Malini", 0],
 
// ];

const evaluateQuiz = ()=>{
    let correct = 0;
    let ind = 0;
    for (item in userChoices){
        let currentChoice = parseInt(userChoices[item].split("-")[1]);
        if((1 + questions[ind][5]) == currentChoice){
            correct++
        }
        ind++;
    }
    document.getElementById("correct").innerHTML = `You answered ${correct} out of ${questions.length} questions correct. Thanks!`
}
 
const showQuestion = ()=>{ 
    let question = questions[currentQuestion]
    document.querySelector(".question-text").innerHTML = question[0]
    document.querySelectorAll(".choice").forEach((e, ind)=>{
        // Add event listeners to all choices
        e.addEventListener("click", ()=>{
            userChoices[currentQuestion] = e.id;
            console.log(userChoices)
            document.querySelectorAll(".choice").forEach(e=>e.classList.remove("choice-selected"))
            e.classList.add("choice-selected")
        })

        if ((ind+1)==6){
            
        }
        else{

        e.innerHTML = question[ind+1]
        }
    })
    if(currentQuestion < questions.length-1){
    console.log(currentQuestion)
    currentQuestion ++;
    }
    else{
        currentQuestion ++;
        // document.getElementById("submit-btn").disabled = true
        // evaluateQuiz()
        document.getElementById("submit-btn").addEventListener("click", evaluateQuiz)
        document.getElementById("submit-btn").removeEventListener("click", showQuestion)
    }
}
showQuestion()
document.getElementById("submit-btn").addEventListener("click", showQuestion)
document.getElementById("restart").addEventListener("click", ()=>{
    currentQuestion = 0;
    userChoices = {}
    showQuestion()
})