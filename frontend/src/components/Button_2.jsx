import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../Styles/Page_change_btn.css';

function Button_2() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="button">
    <button
      className={`arrow-button ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      Previous page <FaArrowRight />
    </button>
    </div>
  );
}

export default Button_2;