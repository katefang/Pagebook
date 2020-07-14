import React from 'react';
import './header.styles.scss';
import { Search } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <div className='header'>
      <h2>fansbook</h2>
      <div className='search'>
        <Search />
      </div>
    </div>
  );
};

export default Header;
