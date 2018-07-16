import React from 'react'
import './Loader.css'
import classNames from 'classnames'

const Loader = ({ active }) => (
    <div className={classNames('loader-container', { active })}>
        <div className="loader-content">
            <div className="loader"></div>
        </div>
    </div>
);

export default Loader;