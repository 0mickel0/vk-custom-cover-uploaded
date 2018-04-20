import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { hideModal } from '../../actions/modal';
import Modal from '../../components/modal';

const Confirmation = ({ title, onConfirm, hideModal }) => {
  const handleConfirm = (isConfirmed) => () => {
    hideModal();
    onConfirm(isConfirmed);
  };

  return (
    <Modal title={title}>
      <button onClick={handleConfirm(true)}>
        Yes
      </button>
      <button onClick={handleConfirm(false)}>
        No
      </button>
    </Modal>
  );
};

export default connect(null, { hideModal })(Confirmation);