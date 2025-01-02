const question = [{
    'que': 'Which of the following is a markaup language?',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JavaScript',
    'd' : 'PHP',
    'correct': 'a'
},{
    'que': 'What year was JavaScript launched?',
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'none of the above',
    'correct': 'b'
},{
    'que': 'What does CSS stands for?',
    'a' : 'case style sheet',
    'b' : 'cascading style sheet',
    'c' : 'core software sheet',
    'd' : 'all of the ',
    'correct': 'b'
}]

let index = 0;
let total = question.length;
let right = 0,
    wrong= 0; 
const questionBox = document.querySelector('.questionBox');
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = ()=>{
    if(index === total){
        endQuiz();
    }
    reset()
    const data = question[index];
    console.log(data);
    questionBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = question[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong ++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    })
    return answer
}

const reset = ()=>{
    optionInputs.forEach((input)=>{
        input.checked = false;
    })
}

const endQuiz = ()=>{
    document.querySelector('.box').innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing the quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}
// inital call

loadQuestion();