import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <span>Countries: </span> | <span>Population: </span>
      </div>
    )
  }
}
