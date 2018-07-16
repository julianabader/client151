import React from 'react'
import './ChildItem.css'
import NameBorder from '../NameBorder/NameBorder';
import daniel from '../../assets/images/daniel.jpg'
import ran from '../../assets/images/ran.jpg'
import ido from '../../assets/images/ido.jpg'

const images = {
    '5b2a8200f5067b23d86c030c': daniel,
    '5b2a8216f5067b23d86c030e': ran,
    '5b2a8225f5067b23d86c0312': ido
}
const ChildItem = ({ _id, name, active, onClickHandler }) => {
    const _onClick = () => {
        if (typeof onClickHandler === 'function') onClickHandler(_id);
    }
    const bgImage = images[_id];
    return (
        <li className="child-item" onClick={_onClick}>
            <h5 className="child-item-name">{name}</h5>
            <NameBorder name={name} highlight={active} bgImage={bgImage} />
        </li>
    )
}

export default ChildItem;