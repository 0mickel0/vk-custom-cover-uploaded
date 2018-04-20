import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createWallItem } from "../../../actions/vk-actions";
import { hideModal } from '../../../actions/modal';

class WallNewItem extends Component {

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.createWallItem(values.message);
    hideModal();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="message"
            name="message"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Send Title</button>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  form: "WallNewItemForm"
})(connect(null, { createWallItem })(WallNewItem));