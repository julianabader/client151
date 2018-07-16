import React from 'react'
import './CategoryList.css'
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoryList = ({ categories }) => {
    return (
        <ul>
            {
                categories.map((category, idx) => <CategoryItem key={`category-${idx}`} {...category} />)
            }
        </ul>
    )
}

export default CategoryList