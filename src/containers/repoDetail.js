import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchRepoPending, fetchRepoSuccess, fetchRepoSuccessPage, fetchRepoFail, setResultsPage } from '../actions/index'
import { fetchRepos } from '../api/service'
import RepoListItem from '../components/repoListItem'

class RepoDetail extends Component {
  constructor(props) {
    super(props)
    this.scrollTopHeight = 0
  }

  componentDidUpdate = () => {
    this.refs.iScroll.scrollTop = this.scrollTopHeight
  }

  // TODO - to create a component for scrollbar.
  componentDidMount = () => {
    const iScroll = this.refs.iScroll
    const { _name } = this.props.match.params
    // To fetch data at first instance
    if (_name) {
      this.searchRepos(_name, 1)
    }

    // To fetch data after scrollbar reach to end of component
    iScroll.addEventListener('scroll', () => {
      const page = this.props.repos.resultsPage
      if (iScroll.scrollTop > this.scrollTopHeight && iScroll.scrollTop + iScroll.clientHeight === iScroll.scrollHeight) {
        this.scrollTopHeight = iScroll.scrollTop

        if (this.props.repos.repo_item.length < 1) {
          return
        } else {
          this.searchRepos(_name, page + 1)
        }
      }
    })
  }

  setResultsPage = pageNumber => {
    this.props.setResultsPage(pageNumber)
  }
  // to fetch data from service
  searchRepos = (name, pageNumber) => {
    this.props.setResultsPage(pageNumber)
    this.props.fetchRepoPending(name)
    fetchRepos(name, pageNumber, this.props.fetchRepoSuccess, this.props.fetchRepoFail)
  }
  // rendering list items from child component and shown at parent component
  renderRepoItem = key => {
    const repo = this.props.repos.retrieved[key]
    return <RepoListItem key={repo.id} id={repo.id} name={repo.name} />
  }
  renderList = () => {
    const retrievedRepos = this.props.repos.retrieved
    if (this.props.repos.fetched) {
      return <ul className="list-group">{Object.keys(retrievedRepos).map(this.renderRepoItem)}</ul>
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">Github Repo List of selected user</div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Repository Name</th>
              </tr>
            </thead>
            <tbody />
          </table>
          <div className="table-responsive scrollbarRepo" ref="iScroll">
            {this.renderList()}
            {this.props.repos.fetchingRepos ? <img src="../../style/images/loading.gif" /> : ''}
          </div>
        </div>
        <a className="btn btn-danger" href="/">
          Back
        </a>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { repos: state.repos }
}

export default connect(
  mapStateToProps,
  { fetchRepoPending, fetchRepoSuccess, fetchRepoFail, setResultsPage, fetchRepoSuccessPage }
)(RepoDetail)
