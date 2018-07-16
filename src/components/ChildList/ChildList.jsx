import React from 'react'
import './ChildList.css'
import ChildItem from '../ChildItem/ChildItem';

const ChildList = ({ children, onClickHandler }) => {
    return (
        <ul className="child-list">
            {
                children.map((child, idx) =>
                    <ChildItem
                        key={`child-${idx}`}
                        onClickHandler={onClickHandler}
                        {...child} />)
            }
        </ul>
    )
}

export default ChildList;