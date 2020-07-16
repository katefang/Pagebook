import React, { useState, useContext } from 'react';
import './header.styles.scss';
import { Search, PersonFill } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { AdminContext } from '../../context/admin-context';

const Header = () => {
  const { admin, setAdmin } = useContext(AdminContext);
  const { push } = useHistory();

  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const handleLogin = () => push('/login');

  const handleLogout = () => {
    setAdmin(null);
    localStorage.clear();
    push('/login');
  };

  const handleProfileOpen = () => push('profile');

  return (
    <div className='main-header'>
      <Link to='/home'>
        <h2>fansbook</h2>
      </Link>
      <div className='icons'>
        <div className='search'>
          <Search />
        </div>
        <div className='person'>
          <PersonFill onClick={handleModalShow} />
        </div>
      </div>
      <Modal size='sm' show={modalShow} onHide={handleModalClose}>
        {admin ? (
          <Modal.Body>
            <p onClick={handleLogout}>logout</p>
            <p onClick={handleProfileOpen}>Profile</p>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <p onClick={handleLogin}>login</p>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
};

export default Header;
