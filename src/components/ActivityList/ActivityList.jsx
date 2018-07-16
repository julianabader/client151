import React from 'react'
import './ActivityList.css'
import ActivityItem from '../ActivityItem/ActivityItem';

const ActivityList = ({ activities }) => {
    if (!activities || !activities.length) {
        return (
            <div>No activities.</div>
        )
    }
    return (
        <ul>
            {
                activities.map((activity, idx) => <ActivityItem key={`activity-${idx}`} {...activity} />)
            }
        </ul>
    )
}

export default ActivityList