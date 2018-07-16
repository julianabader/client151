import React from 'react'
import './ActivityItem.css'
import lichie from '../../assets/images/lichi pick.jpg'
const images = {
    '5b2157b091188b1988530217': lichie
}
const ActivityItem = ({ _id, name, description }) => {
    const image = images[_id];
    return (
        <li className="activity-item">
            <div className="activity-item-image" style={{ backgroundImage: `url("${image}")` }}></div>
            <h4 className="activity-item-title">{name}</h4>
            <p className="activity-item-description">{description}</p>
        </li>
    )
}

export default ActivityItem;