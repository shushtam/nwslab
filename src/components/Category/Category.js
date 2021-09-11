import React from "react";
import './css/style.css';

const Category = (props) => {
    const {category, selected, onClick} = props;

    return (
        <li>
            <button className={category.id === selected ? 'active' : ''} onClick={() => onClick(category.id)}
                    type={'button'}>{category && category.name}</button>
        </li>
    );
}

export default Category;
