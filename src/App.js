import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          date: '2017-08-08',
          time: '11:18',
          title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 2,
          date: '2017-08-04',
          time: '09:30',
          title: 'Suspendisse imperdiet ex risus, a blandit velit faucibus et.'
        },
        {
          id: 3,
          date: '2017-07-25',
          time: '03:16',
          title: 'Nullam placerat efficitur risus, vel auctor ipsum tempus ac.'
        },
        {
          id: 4,
          date: '2017-06-03',
          time: '10:00',
          title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
          id: 5,
          date: '2017-05-16',
          time: '15:16',
          title: 'Suspendisse porttitor eleifend lectus vitae rutrum.'
        }
      ]
    }
  }

  processData() {
    let currDate, newDate;

    currDate = new Date();
    this.dd = currDate.getDate();
    this.mm = currDate.getMonth() + 1;
    this.yyyy = currDate.getFullYear();

    if(this.dd < 10) {
      this.dd = '0' + this.dd;
    }

    if(this.mm < 10) {
        this.mm = '0' + this.mm;
    }

    currDate = this.yyyy + '-' + this.mm + '-' + this.dd;

    this.state.data.map((v, i) => {
      if(v.date === currDate) {
        newDate = v.time;

        let item = this.state.data;
        item[i].date = newDate;

        this.setState({item});
      }
      return v;
    }).indexOf(currDate);

  }

  componentWillMount() {
    this.processData();
  }

  removeAnnouncement(e) {
    var newState = this.state.data;
    newState.splice(e, 1);
    this.setState({data: newState});
    //console.log('in parent ', e);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="announcement-box well">
                <div className="an-heading">
                  <h3>Announcements</h3>
                </div>
                <div className="an-box">
                  {this.state.data.map((val, i) => <Announcement key = {i} data = {val} propOnClick={this.removeAnnouncement.bind(this, i)} /> )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Announcement extends Component {
  propOnClick(e) {
    e.preventDefault();
    this.props.propOnClick(this.props.index);
  }

  render() {
    return (
      <div className="an">
        <div className="an-left">
          <p className="an-date">{this.props.data.date}</p>
          <a href={"/" + this.props.data.id} className="an-title">{this.props.data.title}</a>
        </div>
        <div className="an-right">
          <div className="remove">
            <span className="glyphicon glyphicon-trash" onClick={this.propOnClick.bind(this)}></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
