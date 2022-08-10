import { useState } from "react";
import "./App.css";

function App() {
  const question = [
    {
      questionText: "Столица США",
      answerOptions: [
        { answerText: "Вашингтон", isCorrect: true },
        { answerText: "Бостон", isCorrect: false },
        { answerText: "Лос-Анджелес", isCorrect: false },
        { answerText: "Нью-Йорк", isCorrect: false },
      ],
    },
    {
      questionText: "Язык разметки",
      answerOptions: [
        { answerText: "JavaScript", isCorrect: false },
        { answerText: "HTML", isCorrect: true },
        { answerText: "CSS", isCorrect: false },
        { answerText: "PHP", isCorrect: false },
      ],
    },
    {
      questionText: "Df",
      answerOptions: [
        { answerText: "Вашингтон", isCorrect: true },
        { answerText: "Бостон", isCorrect: false },
        { answerText: "Лос-Анджелес", isCorrect: false },
        { answerText: "Нью-Йорк", isCorrect: false },
      ],
    },
  ];

  function nextQuestion() {
    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // console.log(show);
      setShow(true);
    }
  }

  const results = (el) => {
    if (el.isCorrect == true) {
      setScore(score + 1);
      console.log(el);
    }
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShow(false);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div className="app">
      {!show ? (
        <div className="app-block">
          <div className="app-block__question">
            <div>
              Вопрос {currentQuestion + 1} / {question.length}
            </div>
            {question[currentQuestion].questionText}
          </div>
          <div className="app-block__answer">
            {/* <div className="app-block__answer-item">1</div>
          <div className="app-block__answer-item">2</div>
          <div className="app-block__answer-item">3</div>
          <div className="app-block__answer-item">4</div> */}
            {question[currentQuestion].answerOptions.map((item) => (
              <div
                onClick={(e) => results(item)}
                className="app-block__answer-item"
              >
                {item.answerText}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="show-block">
          <div>
            Правильных ответов {score} / {question.length}
          </div>
          <button onClick={resetQuiz} className="show-block__button">
            Повторить попытку
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
