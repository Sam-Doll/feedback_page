import { useState } from 'react';
import "./App.css";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="one">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwOqgKpxtLPgxcqgv7P96kf-j7OM9jycRHg&s"
            className="image"
          />
        </div>
        <div className="two"><h1>FEEDBACK</h1></div>
        <div className={`head-btns ${menuOpen ? 'active' : ''}`}>
          <button className="head-btn">LOGOUT</button>
          <button className="head-btn">BACK</button>
        </div>
        <div className="hamburger">
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </header>
      <br />
      <p className="styled-paragraph" style={{ textAlign: "center" }}>
        How would you rate your website experience?
      </p>
      <div className="rating-container">
        <div className="rating-option" data-rating="excellent">
          <span className="emoji">😊</span>
          <span className="label">Excellent</span>
        </div>
        <div className="rating-option" data-rating="good">
          <span className="emoji">🙂</span>
          <span className="label">Good</span>
        </div>
        <div className="rating-option" data-rating="ok">
          <span className="emoji">😐</span>
          <span className="label">OK</span>
        </div>
        <div className="rating-option" data-rating="bad">
          <span className="emoji">😞</span>
          <span className="label">Bad</span>
        </div>
        <div className="rating-option" data-rating="worst">
          <span className="emoji">😡</span>
          <span className="label">Worst</span>
        </div>
      </div>
      <br />
      <p className="styled-paragraph">
        Please share in detail what we can improve in our website experience
      </p>
      <div className="feedback-container">
        <textarea
          className="feedback-input"
          placeholder="Write something..."
        />
      </div>
      <button className="submit-end">SUBMIT</button>
      <br />
    </div>
  )
}

export default App