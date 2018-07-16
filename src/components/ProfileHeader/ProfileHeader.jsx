import React, { Component } from 'react'
import './ProfileHeader.css'
import { AuthApi } from '../../utils/api'
import NameBorder from '../NameBorder/NameBorder';
import { Link } from 'react-router-dom'
import esty from '../../assets/images/esty.jpg'

class ProfileHeader extends Component {
    constructor() {
        super();
        this.state = {
            parent: {}
        }
    }
    componentDidMount() {
        this.setState({ parent: AuthApi.getCurrentParent() })
    }
    render() {
        return (
            <div className="profile-header">
                <Link to={`/parent/${this.state.parent._id}`}>
                    <NameBorder name={this.state.parent.name} bgImage={esty} />
                </Link>
            </div>
        )
    }
}

export default ProfileHeader;