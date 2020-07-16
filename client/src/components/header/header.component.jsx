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

  const handleLogout = () => setAdmin(null);

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
          <Modal.Body onClick={handleLogout}>logout</Modal.Body>
        ) : (
          <Modal.Body onClick={handleLogin}>login</Modal.Body>
        )}
      </Modal>
    </div>
  );
};

export default Header;
