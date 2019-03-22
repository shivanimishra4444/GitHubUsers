import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchUserFail, fetchUserPending, fetchUserSuccess, setResultsPage } from '../actions/index.js'
import SearchBar from '../components/searchUsers'
import { fetchUsers } from '../api/service'
import UserList from '../components/userList'

class App extends Component {
  constructor(props) {
    super(props)
  }

  setResultsPage = pageNumber => {
    this.props.setResultsPage(pageNumber)
  }

  searchUsers = (searchString, pageNumber) => {
    this.props.setResultsPage(pageNumber)
    this.props.fetchUserPending(searchString)
    fetchUsers(searchString, pageNumber, this.props.fetchUserSuccess, this.props.fetchUserFail)
  }

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">{'Github User List'}</div>
        <div className="panel-body">
          <SearchBar page={this.setResultsPage} searchUsers={this.searchUsers} placeholder={'Enter user name...'} />
        </div>
        <div className="table-responsive ">
          <UserList users={this.props.users} searchUsers={this.searchUsers} setResultsPage={this.props.setResultsPage} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

export default connect(
  mapStateToProps,
  { fetchUserPending, fetchUserFail, fetchUserSuccess, setResultsPage }
)(App)
