import React, { useState, useContext } from 'react';
import './header.styles.scss';
import { Search, PersonFill } from 'react-bootstrap-icons';
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../../context/user-context';
import { loginUser } from '../../services/auth';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { push } = useHistory();

  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const handleLogin = () => push('/login');

  const handleLogout = () => setUser(null);

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
        {user ? (
          <Modal.Body onClick={handleLogout}>logout</Modal.Body>
        ) : (
          <Modal.Body onClick={handleLogin}>login</Modal.Body>
        )}
      </Modal>
    </div>
  );
};

export default Header;
