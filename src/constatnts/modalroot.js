import React from 'react';
import { connect } from 'react-redux';

import Notification from './modals/notification';
import Confirmation from './modals/confirmation';
import ReduxFormModal from './modals/reduxform_modal';

import { MODAL_TYPE_NOTIFICATION, MODAL_TYPE_CONFIRMATION, MODAL_TYPE_REDUX_FORM } from './ActionType';

const MODAL_COMPONENTS = {
  [MODAL_TYPE_NOTIFICATION]: Notification,
  [MODAL_TYPE_CONFIRMATION]: Confirmation,
  [MODAL_TYPE_REDUX_FORM]: ReduxFormModal
};

const ModalRoot = ({ type, props }) => {
  if (!type) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);