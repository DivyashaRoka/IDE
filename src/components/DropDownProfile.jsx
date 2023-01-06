import React from 'react'
import {Link} from 'react-router-dom';
import '../Styles/App.css'
import useScript from '../hooks/useScript';


function DropDownProfile() {
  useScript('js/click.js');
  return (
    <>
      <button id="dropdown">
        <p id="lang-title">Select language</p>
        <ul id="language-list">
          <li>
            <Link to="/html-css">HTML CSS</Link>
          </li>
          <li>
            <Link to="/python">Python</Link>
          </li>
          <li>
            <Link to="/javascript">JavaScript</Link>
          </li>
        </ul>
      </button>
      </>
  )
}
export default DropDownProfile
