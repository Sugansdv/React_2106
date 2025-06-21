import React, { useState } from 'react';
import Navbar from './components/Navbar';
import questions from './data/questions';

function App() {
  const [username, setUsername] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) setNameSubmitted(true);
  };

  const handleAnswer = (option) => {
    const isCorrect = option === questions[current].answer;
    if (isCorrect) setScore(score + 1);

    setUserAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected: option,
        correct: questions[current].answer
      }
    ]);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setUsername('');
    setNameSubmitted(false);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setShowAnswers(false);
    setUserAnswers([]);
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        {!nameSubmitted && (
          <div className="card shadow-lg mx-auto p-4" style={{ maxWidth: '500px' }}>
            <h4 className="mb-3">Enter your name to begin the quiz:</h4>
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary w-100">Start Quiz</button>
            </form>
          </div>
        )}

        {nameSubmitted && showResult && !showAnswers && (
          <div className="text-center">
            <h2 className="mb-4 text-success">🎉 Well done, {username}!</h2>
            <h4>Your Score: {score} / {questions.length}</h4>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <button className="btn btn-secondary" onClick={() => setShowAnswers(true)}>
                View Answers
              </button>
              <button className="btn btn-primary" onClick={restartQuiz}>
                Restart Quiz
              </button>
            </div>
          </div>
        )}

        {nameSubmitted && showAnswers && (
          <div className="mx-auto" style={{ maxWidth: '700px' }}>
            <h3 className="text-center mb-4 text-info">🔍 Answer Review</h3>
            {userAnswers.map((item, idx) => (
              <div key={idx} className="card mb-3 shadow-sm">
                <div className="card-body">
                  <h5>Q{idx + 1}: {item.question}</h5>
                  <p>
                    <strong>Your Answer:</strong> {item.selected}
                    {item.selected === item.correct ? (
                      <span className="text-success ms-2">✅ Correct</span>
                    ) : (
                      <span className="text-danger ms-2">❌ Incorrect</span>
                    )}
                  </p>
                  {item.selected !== item.correct && (
                    <p><strong>Correct Answer:</strong> {item.correct}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="text-center">
              <button className="btn btn-primary mt-3" onClick={restartQuiz}>
                Restart Quiz
              </button>
            </div>
          </div>
        )}

        {nameSubmitted && !showResult && !showAnswers && (
          <div className="card shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
            <div className="card-body">
              <h5 className="card-title">
                Question {current + 1} of {questions.length}
              </h5>
              <p className="fs-5">{questions[current].question}</p>
              <div className="list-group">
                {questions[current].options.map((opt, idx) => (
                  <button
                    key={idx}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleAnswer(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
