import React, {Component} from 'react';
import {connect} from 'react-redux'
import _ from "lodash";

class UserList extends Component {

  getMonth(bdate){
    if(bdate){
      let date = new Date();
      date.setMonth(bdate.split('.')[1]);
      return date.toLocaleString(navigator.language, { month: "short" })
    }
  }

  getYear(bdate){
    if(bdate){
      return bdate.split('.')[2];
    }
  }

  getDay(bdate){
    if(bdate){
      return bdate.split('.')[0];
    }
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      const img = {
        background: `url(${user.photo_200_orig}) center/cover no-repeat`
      };

      return (
        <div className="example-1 card" key={user.id} >
          <div className="wrapper" style={ img }>
            <div className={ user.sex === 1 ? 'female date' : 'male date' } >
              <span  className="day">{this.getDay(user.bdate)}</span>
              <span className="month">{this.getMonth(user.bdate)}</span>
              <span className="year">{this.getYear(user.bdate)}</span>
            </div>
            <div className="data">
              <div className="content">
                <h1>{user.first_name} {user.last_name}</h1>
                <div className="title"><a href="#">{user.status}</a></div>
                <div className="text">Olympic gold medals contain only about 1.34 percent gold, with the rest composed
                  of
                  sterling silver.
                </div>
                <label className="menu-button"><span></span></label>
              </div>
              <input type="checkbox" id="show-menu"/>
              <ul className="menu-content">
                <li><a href="#" className="fa fa-bookmark-o"></a></li>
                <li><a href="#" className="fa fa-heart-o"><span>47</span></a></li>
                <li><a href="#" className="fa fa-comment-o"><span>8</span></a></li>
              </ul>
            </div>
          </div>
        </div>

      )
    });
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );

  }
}

function mapStateToProps({users}) {
  return {users};
}

export default connect(mapStateToProps)(UserList);