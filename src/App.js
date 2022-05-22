import React, { useState } from 'react';
export default function App() {
	const questions= [
		{
			questionText: 'Choose the right letter for the blank: _ for Vendetta (Movie)',
			answerOptions: [
				{ answerText: 'X', isCorrect: false },
				{ answerText: 'T', isCorrect: false },	
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'Y', isCorrect: false },
        		{ answerText: 'E', isCorrect: false },
				{ answerText: 'O', isCorrect: false },
				{ answerText: 'V', isCorrect: true },
				{ answerText: 'I', isCorrect: false },
        		{ answerText: 'G', isCorrect: false },
			],
		},
		{
			questionText: 'What is the second letter of the name of the country with the second highest population in the world?',
			answerOptions: [
				{ answerText: 'D', isCorrect: false },
				{ answerText: 'H', isCorrect: false },
				{ answerText: 'N', isCorrect: true },
				{ answerText: 'R', isCorrect: false },
        		{ answerText: 'F', isCorrect: false },
				{ answerText: 'M', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'U', isCorrect: false },
        		{ answerText: 'A', isCorrect: false },
			],
		},
		{
			questionText: 'Choose the right letter for the blank: H2_ (Chemical formula for Water)',
			answerOptions: [
				{ answerText: 'S', isCorrect: false },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'K', isCorrect: false },
				{ answerText: 'O', isCorrect: true },
        		{ answerText: 'A', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'W', isCorrect: false },
				{ answerText: 'T', isCorrect: false },
        		{ answerText: 'D', isCorrect: false },
			],
		},
	];

	const questions2= [
		{
			questionText: 'Choose the right letter for the blank: Dial _ for Murder (Movie)',
			answerOptions: [
				{ answerText: 'D', isCorrect: false },
				{ answerText: 'G', isCorrect: false },
				{ answerText: 'F', isCorrect: false },
				{ answerText: 'O', isCorrect: false },
        		{ answerText: 'W', isCorrect: false },
				{ answerText: 'M', isCorrect: true },
				{ answerText: 'X', isCorrect: false },
				{ answerText: 'T', isCorrect: false },
        		{ answerText: 'L', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following letters are worth 8 points in the game of Scrabble',
			answerOptions: [
				{ answerText: 'J', isCorrect: true },
				{ answerText: 'Q', isCorrect: false },
				{ answerText: 'K', isCorrect: false },
				{ answerText: 'M', isCorrect: false },
        		{ answerText: 'Z', isCorrect: false },
				{ answerText: 'X', isCorrect: false },
				{ answerText: 'L', isCorrect: false },
				{ answerText: 'P', isCorrect: false },
        		{ answerText: 'W', isCorrect: false },
			],
		},
		{
			questionText: 'Choose the right letter for the blank: The _ - Files (Sci-fi TV Series)',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'F', isCorrect: false },
				{ answerText: 'P', isCorrect: false },
				{ answerText: 'X', isCorrect: true },
        		{ answerText: 'T', isCorrect: false },
				{ answerText: 'K', isCorrect: false },
				{ answerText: 'H', isCorrect: false },
				{ answerText: 'O', isCorrect: false },
        		{ answerText: 'M', isCorrect: false },
			],
		},
	];
	const questions3= [
		{
			questionText: 'In Morse Code, which of the following letters is represented by ONLY dots and NO dashes?',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'O', isCorrect: false },
				{ answerText: 'H', isCorrect: true },
				{ answerText: 'J', isCorrect: false },
        		{ answerText: 'X', isCorrect: false },
				{ answerText: 'M', isCorrect: false },
				{ answerText: 'H', isCorrect: true },
				{ answerText: 'Q', isCorrect: false },
        		{ answerText: 'T', isCorrect: false },
			],
		},
		{
			questionText: 'On the TV Show "Sesame Street", what letter did Cookie Monster sing was "good enough for me"?',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'C', isCorrect: true },
				{ answerText: 'M', isCorrect: false },
				{ answerText: 'F', isCorrect: false },
        		{ answerText: 'S', isCorrect: false },
				{ answerText: 'P', isCorrect: false },
				{ answerText: 'O', isCorrect: false },
				{ answerText: 'U', isCorrect: false },
        		{ answerText: 'I', isCorrect: false },
			],
		},

		{
			questionText: 'Choose the right letter for the blank: Compound _ (Wart Ointment)',
			answerOptions: [
				{ answerText: 'X', isCorrect: false },
				{ answerText: 'S', isCorrect: false },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'U', isCorrect: false },
        		{ answerText: 'O', isCorrect: false },
				{ answerText: 'W', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
				{ answerText: 'R', isCorrect: false },
        		{ answerText: 'Q', isCorrect: false },
			],
		},
	];
	const qs = [questions, questions2, questions3];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [score2, setScore2] = useState(0);
 	const [level,setLevel] = useState(1);
	const [classToApply, setclassToApply] = useState("");
	const [chosenIndex, setchosenIndex] = useState(0);


	const handleAnswerOptionClick = (isCorrect,index) => {
		setchosenIndex(index);
		let newscore, newscore2;
		if (isCorrect) {
			newscore=score+1;
			newscore2=score2+1;
			setScore(newscore);
			setScore2(newscore2);
			setclassToApply("correct");
			console.log("correct");
			console.log(score);
			console.log(newscore);
		}
		else{
			setclassToApply("incorrect");
			console.log("incorrect");
			console.log(score);
			console.log(score2);
			}
		setTimeout(() => { const nextQuestion = currentQuestion + 1;
		setclassToApply("");
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			console.log("going to next question " + (nextQuestion+1));
		} else {
      if(newscore<2){
        setCurrentQuestion(0);
		setScore2(score2-score);
		setScore(0);
		console.log("restarting level");
      }
      else{
        const nextLevel = level+1;
		console.log("going to next level");
		if(level===3){
			setShowScore(true);
		}else{
			setLevel(nextLevel);
			setCurrentQuestion(0);
			setScore(0);
			
		}
      }
		}}, 1000);
		
    
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score2}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
              				<span> Level {level}</span>
							<div>Question {currentQuestion + 1}</div>
						</div>
						<div className='question-text'>{qs[level-1][currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{qs[level-1][currentQuestion].answerOptions.map((answerOption,index) => (
							<button 
								key={index} 
								className={index === chosenIndex?classToApply:null}
								onClick={() => handleAnswerOptionClick(answerOption.isCorrect,index)}>
									{answerOption.answerText}
							</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

