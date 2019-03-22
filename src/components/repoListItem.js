import React from 'react'
import { Link } from 'react-router-dom'

const RepoListItem = props => {
  // TODO - fetch repository  details, not only name
  return (
    <li className="repo-list-item" id={props.id}>
      {props.name}
    </li>
  )
}

export default RepoListItem
