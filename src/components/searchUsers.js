import React, { Component } from 'react'

export default class SearchBar extends Component {
  handleClick = event => {
    event.preventDefault()
    // Pass a page value of 1 to provide our resultPage value
    this.props.searchUsers(this.input.value, 1)
  }

  render() {
    return (
      <form className="navbar-form navbar-left" onSubmit={this.handleClick}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user-search"
            placeholder={this.props.placeholder}
            ref={input => {
              this.input = input
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary" value="Search">
          {'Search'}
        </button>
      </form>
    )
  }
}
