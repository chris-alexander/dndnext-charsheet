import React from 'react';
import Appbar from 'muicss/lib/react/appbar';

const Header = (props) => {
  const { name } = props;
  return (
    <header>
      <Appbar>
        <table width="100%">
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
