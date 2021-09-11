import React, {useState} from "react";
import {connect} from "react-redux";
import Category from "../Category/Category";
import './css/style.css';

const Categories = (props) => {
    const {categories, onClick} = props;
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
        onClick(categoryId);
    }

    return (
        <div className={'categories-list'}>
            <h2>Categories</h2>
            <ul>
                {categories && categories.length
                    ? categories.map((category, index) => {
                        return <Category key={`category-${category.id}`} category={category}
                                         selected={selectedCategoryId} onClick={handleCategoryClick}/>;
                    })
                    : "No Categories!"}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    const categories = state && state.categories;
    return {categories};
};

export default connect(mapStateToProps)(Categories);
