import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchWallItems, createWallItem } from "../../../actions/vk-actions";
import WallNewItem from "./wall_new_item"

import { showModal } from '../../../actions/modal';
import { MODAL_TYPE_NOTIFICATION, MODAL_TYPE_CONFIRMATION, MODAL_TYPE_REDUX_FORM } from '../../../constatnts/ActionType';

class WallPosts extends Component {
  componentDidMount() {
    this.props.fetchWallItems();
  }

  renderPosts() {
    return _.map(this.props.items, item => {
      return(
          <li className="list-group-item" key={item.id}>
            {item.text}
          </li>
        )
    });
  }

  showNotification = () => {
    this.props.showModal(MODAL_TYPE_NOTIFICATION, {
      title: 'This is an awesome notification.',
      close: true
    });
  };
  showConfirm = () => {
    this.props.showModal(MODAL_TYPE_CONFIRMATION, {
      title: 'Do you confirm?',
      close: true,
      onConfirm: (isConfirmed) => {
        this.props.showModal(MODAL_TYPE_NOTIFICATION, {
          title: 'The user did confirm: ' + isConfirmed
        });
      }
    });
  };
  showPostForm = () => {
    this.props.showModal(MODAL_TYPE_REDUX_FORM, {
      title: 'Post title',
      close: true,
      componentFunc: props => <WallNewItem {...props}/>
    });
  };

  render() {
    return (
      <div>
        <div className="back">
          <Link to="/" className="back-btn"></Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        {/*<button onClick={this.showNotification}>*/}
          {/*Show modal*/}
        {/*</button>*/}
        {/*<button onClick={this.showConfirm}>*/}
          {/*Show confirm*/}
        {/*</button>*/}
        <div className="add-post" onClick={this.showPostForm}>
          +
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, { showModal, fetchWallItems, createWallItem })(WallPosts);