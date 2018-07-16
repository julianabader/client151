import React, { Component } from 'react'
import './Parent.css'
import { ParentsApi, CategoriesApi } from '../../utils/api'
import ChildList from '../../components/ChildList/ChildList';
import CategoryList from '../../components/CategoryList/CategoryList';
import Loader from '../../components/Loader/Loader';
import NameBorder from '../../components/NameBorder/NameBorder';
import esty from '../../assets/images/esty.jpg'

class Parent extends Component {
    constructor() {
        super();

        this.state = {
            redirect: false,
            isLoading: false,
            parent: {},
            children: [],
            categories: []
        }
        this.onChildClick = this.onChildClick.bind(this);
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const { parentId } = this.props.match.params;
        const parent = await ParentsApi.get(parentId);
        const { children } = parent;
        const categories = await CategoriesApi.getAll();
        this.setState({ parent, children, categories, isLoading: false }, () => {
            if (children && children.length) {
                this.onChildClick(children[0]._id);
            }
        });
    }
    onChildClick(childId) {
        const children = this.state.children.map(child => Object.assign({}, child, {
            active: child.active = childId === child._id
        }));
        const activeChild = children.find(child => child.active);
        const categories = CategoriesApi.calculateCategoryPercentage(this.state.categories, activeChild)

        this.setState({ children, categories })
    }
    render() {
        const { parent, children, categories } = this.state;
        
        const generateCategories = () => {
            if (children && children.length) {
                return <CategoryList categories={categories} />;
            }
            return <div>No children, no categories.</div>;
        }
        return (
            <div className="parent-page">
                <Loader active={this.state.isLoading} />
                <div className="parent-page-content">
                    <div className="parent-page-heading">
                        <div className="parent-page-heading-left">
                            <NameBorder name={parent.name} size="big" bgImage={esty} />
                        </div>
                        <div className="parent-page-heading-right">
                            <h3 className="parent-name">{parent.name}</h3>
                            <div>
                                <ChildList children={children} onClickHandler={this.onChildClick} />
                            </div>
                        </div>
                    </div>
                    <div className="categories-container">
                        {generateCategories()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Parent;