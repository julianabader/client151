import React, { Component } from 'react'
import './Login.css'
import { ParentsApi, AuthApi } from '../../utils/api'
import { Redirect } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import classNames from 'classnames'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            parentName: '',
            parentId: '',
            redirect: false,
            isLoading: false,
            isFormValid: false
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    async handleFormSubmit(event) {
        event.preventDefault();
        if (!this.state.isFormValid) return;
        this.setState({ isLoading: true })
        const parent = await ParentsApi.getByName(this.state.parentName)
        this.setState({ isLoading: false })
        if (parent && parent._id) {
            AuthApi.setCurrentParent(parent);
            this.setState({ redirect: true, parentId: parent._id })
        } else {
            alert('No such parent');
        }
    }
    handleInputChange(event) {
        const { value } = event.target;
        this.setState({ parentName: value, isFormValid: value.length > 0 });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={`parent/${this.state.parentId}`} />
        }

        return (
            <div>
                <Loader active={this.state.isLoading} />
                <h1 className="main-title">Activities</h1>
                <h2 className="login-page-title">Login</h2>
                <div className="login-page-content">
                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            value={this.state.parentName}
                            placeholder="Enter parent name"
                            onChange={this.handleInputChange}
                        />
                        <button className={classNames('submit-btn', { disabled: !this.state.isFormValid })}>Go</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;