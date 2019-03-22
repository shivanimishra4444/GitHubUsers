import React, { Component } from 'react'
import UserListItem from './userListItem'
import Pagination from './pagination'

class UserList extends Component {
  constructor(props) {
    super(props)
  }
  renderUserItem = key => {
    const user = this.props.users.retrieved[key]
    let active = false
    return <UserListItem key={user.id} id={user.id} isActive={active} name={user.login} />
  }
  render() {
    const retrievedUsers = this.props.users.retrieved
    if (this.props.users.fetchingUsers) {
      return <img src="../../style/images/loading.gif" />
    } else if (this.props.users.fetched) {
      return (
        <div>
          <ul className="list-group user-list">{Object.keys(retrievedUsers).map(this.renderUserItem)}</ul>
          {this.props.users.fetchingUsers ? <img src="../../style/images/loading.gif" /> : ''}
          <Pagination
            numberOfUsers={this.props.users.retrieved.length}
            page={this.props.users.resultsPage}
            userToSearch={this.props.users.userToSearch}
            searchUsers={this.props.searchUsers}
            setResultsPage={this.props.setResultsPage}
          />
        </div>
      )
    } else {
      return null
    }
  }
}

export default UserList
