// About.js
import React from 'react';
import "./Home.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';

function Home() {
  return (
    <div className='ho'>
      <div className='box'>
        Contact
      </div>
      <ul className='cont'>
        <li><LocalPhoneIcon/> +251927831856</li>
        <li><MarkAsUnreadIcon/> eshetuhailemichael06@gmail.com</li>
      </ul>
      <div className='skill'>
      <div className='box'>
        skill
      </div>
      <ul className='k'>
        <li>
        Programming languages:<br/>        java,c++.
        </li>
        <li>
        Web Development:<br/>HTML,CSS,JavaScript and node.js.

        </li>
        <li>
        Strong communication and Collaboration Skills.

        </li>
      </ul>

      </div>

      <div className='box'>
        language
      </div>
      <div className='linewithword'>
      <div className='line'></div>
      <div className='word'>English</div>
      </div>
      <div className='linewithword'>
      <div className='line'></div>
      <div className='word'>Amharic</div>
      </div>
      <div className='linewithword'>
      <div className='line'></div>
      <div className='word'>Afaan Oromo</div>
      </div>
     
    </div>
  );
}

export default Home;

