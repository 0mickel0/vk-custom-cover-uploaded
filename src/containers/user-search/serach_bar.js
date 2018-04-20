import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/vk-actions'
import { Link } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { user: ""};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ user: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchUsers(this.state.user);
    // this.setState({user: ""});
  }

  render() {
    return(
      <div>
        <div className="back">
          <Link to="/" className="back-btn"></Link>
        </div>
        <form  onSubmit={this.onFormSubmit} className="input-group">

          <input
            placeholder="find something"
            className="form-control"
            value={this.state.user}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);