import React  from 'react';
import Img from './components/img';
import App1 from './components/App1';
import HtmlCss from './components/Html-css';
import JS from './components/JS';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import DropDownProfile from './components/DropDownProfile';
import logo from './Styles/techis-logo.png';
import './Styles/App.css';


function App() {
  return (
      <>
      <Router>
      <header>
      <div id="navigate">
      <Link to="/"><img src={logo} id="techis-logo" alt=""/></Link>
      <DropDownProfile/>
      </div>
      </header>
        <Routes>
        <Route path="/" element={<Img />} />
        </Routes>
      <div>
              <Routes>
                  <Route path="/html-css" element={<HtmlCss />} />
                  <Route path="/python" element={<App1 />} />
                  <Route path="/javascript" element={<JS />} />
              </Routes>
      </div>
      </Router>
    </>
  )
}

export default App;


