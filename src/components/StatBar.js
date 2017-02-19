import React from 'react';

import '../css/StatBar.css';

const StatBar = (props) => {
  const { statName, max, current } = props;
  const stat = current / max;
  const style = {
    background: (stat <= 0.2) ? "red" : (stat <= 0.6) ? "orange" : "green",
    transform: `scaleX(${stat})`
  };
  return (
    <div className="StatBar">
      <span>{statName}</span>
      <span className="bar">
        <div className="bar-fill" style={style}/>
        <div className="bar-info">
          {current} / {max}
        </div>
      </span>
    </div>
  );
};

export default StatBar;
