import React, { Component } from 'react';
import Announcement from '../Announcements/Announcement';
import Data from '../../data/announcements';

const styles = {
  container: {
    width: '100%',
    maxWidth: '555px',
    display: 'block',
    margin: '0 auto',
    border: '1px solid #e3e3e3',
    padding: '19px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    WebkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)',
    MozBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.05)'
  },
  heading: {
    fontSize: '22px',
    margin: '5px 0 15px',
    padding: '0 0 5px'
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentWillMount() {
    let mountState = Data.data;
    this.setState({data: mountState});
  }

  componentDidMount() {
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

  removeAnnouncement(e) {
    var newState = this.state.data;
    newState.splice(e, 1);
    this.setState({data: newState});
  }

  render() {
    return (
      <div>
        <div style={styles.container}>
          <h3 style={styles.heading}>Announcements</h3>
          <div className="an-box">
            {this.state.data.map((val, i) => <Announcement key = {i} data = {val} propOnClick={this.removeAnnouncement.bind(this, i)} /> )}
          </div>
          <button>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
