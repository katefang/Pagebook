import React, { useState, useContext } from 'react';
import './header.styles.scss';
import { PersonFill } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom';
import { AdminContext } from '../../context/admin-context';
import Modal from '../modal/modal.component';

const Header = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const { push } = useHistory();
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  const handleLogin = () => push('/login');

  const handleLogout = () => {
    setAdmin(null);
    localStorage.clear();
    push('/login');
  };

  const handleProfileOpen = () => push('/profile');

  return (
    <div className='main-header'>
      <Link to='/home'>
        <div className='logo'>P</div>
      </Link>
      <div className='icons'>
        <div className='person'>
          <PersonFill onClick={toggleModal} />
        </div>
      </div>
      <Modal show={show} toggleModal={toggleModal}>
        {admin ? (
          <>
            <p onClick={handleLogout}>logout</p>
            <p onClick={handleProfileOpen}>Profile</p>
          </>
        ) : (
          <>
            <p onClick={handleLogin}>login</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Header;
