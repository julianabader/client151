import React, { Component } from 'react'
import './Category.css'
import { CategoriesApi } from '../../utils/api'
import Loader from '../../components/Loader/Loader'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import ActivityList from '../../components/ActivityList/ActivityList';

class Category extends Component {
    constructor() {
        super();
        this.state = {
            category: {},
            activities: [],
            isLoading: false
        }
    }
    async componentDidMount() {
        this.setState({ isLoading: true });
        const { categoryId } = this.props.match.params;
        const category = await CategoriesApi.get(categoryId);
        const { activities } = category;

        this.setState({ category, activities, isLoading: false });
    }
    render() {
        const categoryName = !this.state.category.name ? '...' : `${this.state.category.name} Intelligence`
        return (
            <div className="category-page">
                <Loader active={this.state.isLoading} />
                <ProfileHeader />
                <div className="category-card">
                    <h4 className="category-card-title">{categoryName}</h4>
                    <div className="activities-container">
                        <div>
                            <ActivityList activities={this.state.activities} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;