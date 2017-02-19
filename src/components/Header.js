import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

import '../css/Header.css';

const Header = (props) => {
  const { name } = props;
  return (
    <header className="Header">
      <Appbar>
        <table>
          <tbody>
            <tr>
              <td className="mui--appbar-height">
                <h1>{name}</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    </header>
  );
};

export default Header;
