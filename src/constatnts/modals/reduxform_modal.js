import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { hideModal } from '../../actions/modal';
import Modal from '../../components/modal';

const ReduxFormModal = ({ title, afterClose, hideModal, componentFunc }) => {
  const onClose = () => {
    hideModal();
    if (afterClose) {
      afterClose();
    }
  };

  return (
    <Modal title={title} onClose={onClose}>
      {componentFunc()}
    </Modal>
  );
};

ReduxFormModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default connect(null, { hideModal })(ReduxFormModal);