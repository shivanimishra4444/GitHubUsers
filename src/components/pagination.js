import React from 'react'

const Pagination = (props) => {
    const showNextPage = function () {
        props.setResultsPage(props.page + 1)
        props.searchUsers(props.userToSearch, props.page + 1)
    }

    const showPrevPage = function () {
        props.setResultsPage(props.page - 1)
        props.searchUsers(props.userToSearch, props.page - 1)
    }

    return (
        <div className="pageControls">
            { props.page > 1 ? <span onClick={showPrevPage} className="prev">{'<< prev'}</span> : <span className="pad"></span> }
            <span className="pageNum">{props.page}</span>
            { props.numberOfUsers < 12 ? <span className="pad"></span> : <span onClick={showNextPage} className="next">{'next >>'}</span> }
        </div>
    )
}

export default Pagination
