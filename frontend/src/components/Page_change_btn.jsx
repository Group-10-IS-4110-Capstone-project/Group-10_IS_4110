import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../Styles/Page_change_btn.css';

function PageChangeButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      className={`arrow-button ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      Click me <FaArrowRight />
    </button>
  );
}

export default PageChangeButton;
