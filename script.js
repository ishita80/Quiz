const questions=[
    {
        'que': "Which of the following is a markup language?",
        'a' : "HTML",
        'b' : "CSS",
        'c' : "Javascript",
        'd' : "PHP",
        'correct' : 'a'
    },
    {
        'que': "When was Javascript launched?",
        'a' : "1996",
        'b' : "1995",
        'c' : "1994",
        'd' : "None of the above",
        'correct' : 'b' 
    },
    {
        'que': "What does CSS stand for?",
        'a' : "Hypertext Markup Language",
        'b' : "Cascading Style Sheets",
        'c' : "Jason Object Notation",
        'd' : "Create Standards",
        'correct' : 'b'
    }
]


let index=0;
let score=0;

const radio=document.querySelectorAll("input");

const loadQuestion = () => {
     const data =questions[index];
     quesBox.textContent=`Q${index+1}. ` +data.que;

     //const radio=document.querySelectorAll("input");
     //console.log(radio);

     for(let i=0;i<questions.length;i++){
        radio[i].checked=false;
     }
     const options=document.querySelectorAll("label");

     options[0].textContent="a) "+data.a;
     options[1].textContent="b) "+data.b;
     options[2].textContent="c) "+data.c;
     options[3].textContent="d) "+data.d;
}

loadQuestion();

const update_score = () => {
    for(let i=0;i<questions.length;i++){
        if(radio[i].checked==true && (questions[index].correct.charCodeAt(0)-97)===i){
           score++;
        }
     }

    nextQuestion();
}

const nextQuestion = () => {
   // console.log(index);
    index++;
    console.log(score);
    if(index>2){
        //console.log("Yay");
        Button.removeEventListener("click",update_score);
        end_of_quiz();
        return ;
    }
    loadQuestion();
}

const Button=document.querySelector(".btn");
// console.log(Button);
Button.addEventListener("click",update_score);

const end_of_quiz = () => {
   const h2=document.createElement("h2");
   h2.id="quesBox";
   h2.textContent=`Your final score is ${score}/${questions.length}`;
   const box=document.querySelector("#box");
   box.innerHTML="";
   box.appendChild(h2);
   
}