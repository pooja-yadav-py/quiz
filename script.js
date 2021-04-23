const quizDB = [

{
	question: "Q1: What is the full form of HTML?",
	a:"Hello To My Land",
	b:"Hey Text Markup Language",
	c:"HyperText Markup Language",
	d:"Hypertext Markup Language",
	ans: "ans4"
},
{
	question: "Q2: What is the full form of CSS?",
	a:"Cascading Style Sheets",
	b:"Cascading Style Sheep",
	c:"Cartoon Style Sheets",
	d:"Cascading Style Sheet",
	ans: "ans1"
},
{
	question: "Q3: What is the full form of HTTP?",
	a:"Hypertext Transfer Product",
	b:"Hypertext Test Protocol",
	c:"Hey Transfer protocol",
	d:"Hypertext Transfer protocol",
	ans: "ans4"
},
{
	question: "Q4: What is the full form of JS?",
	a:"JavaScript",
	b:"JavaSuper",
	c:"JustScript",
	d:"jordenShoes",
	ans: "ans1"
}

];

let Question = document.getElementsByClassName('qustion')[0];
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let button = document.getElementById('submit');

//refrenc for  get selected option
let answers = document.querySelectorAll('.answer');

let showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

	const qustionList = quizDB[questionCount];
 
 Question.innerHTML = qustionList.question;
 option1.innerHTML = qustionList.a;
 option2.innerHTML = qustionList.b;
 option3.innerHTML = qustionList.c;
 option4.innerHTML = qustionList.d;

}


loadQuestion();

const getCheckAnswer = () =>{
	let answer;

//jo bhi current element checked wala mil gya uski id ko leke answer me put kr dere h
	answers.forEach((curAnsElem) => {
      if(curAnsElem.checked){
      	answer = curAnsElem.id;
      }

      
	});
	 return answer;

};

const deselectAll = () =>{
	answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

button.addEventListener('click', () => {
	const checkedAnswer = getCheckAnswer();
	console.log(checkedAnswer);

	//compair selected id to right answer
	if(checkedAnswer===quizDB[questionCount].ans){
		score++;
	};
     
     //load another qustion on screen
    questionCount++;
    
    //deselect all checkbox
    deselectAll();
	if(questionCount<quizDB.length){
		loadQuestion()
	}else{

		showScore.innerHTML = `<h3>you scored ${score}/${quizDB.length}</h3>
		<button class="btn" onclick="location.reload()">Start Again</button>`;

		showScore.classList.remove('scoreArea');
	}
});