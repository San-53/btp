// import { useState } from "react";
import React, { useState } from 'react';
import ChatBot from './components/ChatBot';
import Quiz from './components/Quiz';
import Explore from './components/ExploreSec.jsx';

function App() {
  const [displayComponent, setDisplayComponent] = useState("explore");

  function handleSelectChange(event) {
    setDisplayComponent(event.target.value);
  }

  function renderSelectedComponent() {
    switch (displayComponent) {
      case "chatbot":
        window.location.href = "https://www.google.com";
    return null;
    case "ex":
      window.location.href = "https://www.nimh.nih.gov/health/topics/suicide-prevention";
      return null;
      case "ex1":
        window.location.href = "https://fluffy-sherbet-5f395f.netlify.app/";
        return null;
        case "ex2":
          window.location.href = "https://www.thelivelovelaughfoundation.org/helpline";
          return null;
      default:
        return <Explore />;
    }
  }

  return (
    <div className="App">
      <div id="header">
        <h4 className="header1">Mental Health App</h4>
        <nav>
          <li>
            <select className='options' value={displayComponent} onChange={handleSelectChange}> 
              <option className='options'>More</option>
              <option className='options' value="ex2">Helpline Number</option>
              <option className='options' value="ex">Suicidal Helpline Number</option>
              <option className='options' value="ex1">About us</option>
            </select>
          </li>
        </nav>
      </div>
      <div>{renderSelectedComponent()}</div>
    </div>
  );
}

export default App;
