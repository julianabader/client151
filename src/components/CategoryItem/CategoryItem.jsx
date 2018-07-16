import React from 'react'
import './CategoryItem.css'
import { Link } from 'react-router-dom'
import movement from '../../assets/images/movement.png'
import fun from '../../assets/images/football.jpg'
import creative from '../../assets/images/creative.png'
import interpersonal from '../../assets/images/interpersonal.png'
import musical from '../../assets/images/musical.png'
import linguistic from '../../assets/images/linguistic.png'

const images = {
    '5b20342ac74d030420398680': movement,
    '5b3656902815b4001479e9e8': fun,
    '5b203484c74d030420398685': creative,
    '5b20346bc74d030420398683': interpersonal,
    '5b203456c74d030420398682': musical,
    '5b203478c74d030420398684': linguistic
}
const CategoryItem = ({ _id, name, description, percentage }) => {
    const generateDescription = () => {
        if (description && description.length > 2) {
            return (
                <div className="category-item-description">{description}</div>
            )
        }

        return (<div></div>);
    }
    const bgImage = images[_id];

    const _percentange = percentage > -1 ? (
        <div className="percentage-bar-container">
            <div className="percentage-bar">
                <div className="percentage-bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            <div className="percentage">{`${percentage}%`}</div>
        </div>
    ) : 'No data';
    return (
        <li className="category-item" style={{ backgroundImage: `url(${bgImage})` }}>
            <Link to={`/category/${_id}`}>
                <div className="category-item-info">
                    {generateDescription()}
                    <h4 className="category-item-title">{name}</h4>
                    {_percentange}
                </div>
            </Link>
        </li>
    )
}

export default CategoryItem;