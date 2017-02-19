import React from 'react';
import Panel from 'muicss/lib/react/panel';

import StatBar from './StatBar';
import '../css/Character.css';

const Character = (props) => {

  return (
    <Panel className="Character">
      <div className="stats-block">
        <StatBar statName="HP" max="40" current="28" />
      </div>
    </Panel>
  );
};

export default Character;
