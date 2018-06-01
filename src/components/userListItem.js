import React from 'react';
import {Link} from 'react-router-dom';

const UserListItem = (props) => {
    // TODO - fetch more user details, not only name
    return (
        <li className="list-group-item" id={props.id}>
        <Link to={`/user/repos/${props.name}`}>{props.name}</Link>
        </li>
        )
    
}

export default UserListItem;
