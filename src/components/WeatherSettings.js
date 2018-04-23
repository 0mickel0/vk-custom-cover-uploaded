import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import updateWeatherSettings from "../actions/weather-action";

class WeatherSettings extends Component {

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input}/>
      </div>
    );
  }

  onSubmit(values) {
    this.props.updateWeatherSettings(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Country"
          name="country"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
export default reduxForm({form: "WeatherSettings"})(connect(null, { updateWeatherSettings })(WeatherSettings));