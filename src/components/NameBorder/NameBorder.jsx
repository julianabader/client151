import React from 'react'
import './NameBorder.css'
import classNames from 'classnames'

const NameBorder = ({ name = ' ', size = '', highlight, bgImage }) => {
    if (bgImage) {
        return (
            <div className={classNames('name-border', size, { highlight })}
                style={{ backgroundImage: `url(${bgImage})` }}>
            </div>
        )
    }
    return (
        <div className={classNames('name-border', size, { highlight })}>
            <span className="name-border-letter">{name[0].toUpperCase()}</span>
        </div>
    )
}

export default NameBorder;