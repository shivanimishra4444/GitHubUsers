import React from 'react'

const Pagination = props => {
  const showNextPage = () => {
    props.setResultsPage(props.page + 1)
    props.searchUsers(props.userToSearch, props.page + 1)
  }

  const showPrevPage = () => {
    props.setResultsPage(props.page - 1)
    props.searchUsers(props.userToSearch, props.page - 1)
  }

  return (
    <div className="pageControls">
      {props.page > 1 ? (
        <span onClick={showPrevPage} className="prev">
          {'<< prev'}
        </span>
      ) : (
        <span className="pad" />
      )}
      <span className="pageNum">{props.page}</span>
      {props.numberOfUsers < 12 ? (
        <span className="pad" />
      ) : (
        <span onClick={showNextPage} className="next">
          {'next >>'}
        </span>
      )}
    </div>
  )
}

export default Pagination
