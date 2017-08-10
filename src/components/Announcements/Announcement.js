import React, { Component } from 'react';

const styles = {
  box: {
    padding: '10px 0',
    borderTop: '1px solid #e3e3e3',
    width: '100%',
    fontSize: '0'
  },
  left: {
    width: 'calc(100% - 60px)',
    display: 'inline-block',
    verticalAlign: 'bottom'
  },
  right: {
    width: '60px',
    display: 'inline-block',
    verticalAlign: 'bottom',
    textAlign: 'right'
  },
  date: {
    margin: '0',
    lineHeight: '1.6',
    fontSize: '14px'
  },
  title: {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: 'block',
    lineHeight: '1.6',
    fontSize: '14px',
    color: '#537ce0'
  },
  btn: {
    fontSize: '14px',
    lineHeight: '1.6',
    cursor: 'pointer',
    color: '#d9534f',
    padding: '5px'
  }
}

class Announcement extends Component {
  propOnClick(e) {
    e.preventDefault();
    this.props.propOnClick(this.props.index);
  }

  render() {
    return (
      <div style={styles.box}>
        <div style={styles.left}>
          <p style={styles.date}>{this.props.data.date}</p>
          <a href={"/" + this.props.data.id} style={styles.title}>{this.props.data.title}</a>
        </div>
        <div style={styles.right}>
          <div>
            <span style={styles.btn} onClick={this.propOnClick.bind(this)}>x</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Announcement;
