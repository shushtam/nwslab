import axios from "axios";

export function fetchCategories() {
    return function (dispatch) {
        return axios.get("https://api.thecatapi.com/v1/categories")
            .then(({data}) => {
                dispatch(setCategories(data));
            });
    };
}

export function fetchImages(categoryId = null, page = 1) {
    return function (dispatch) {
        const categoryFilter = categoryId ? `&category_ids=${categoryId}` : '';
        return axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}${categoryFilter}`)
            .then(({data}) => {
                dispatch(setImages(data));
            });
    };
}

export function clearImages() {
    return {
        type: 'CLEAR_IMAGES',
    }
}

function setCategories(data) {
    return {
        type: 'SET_CATEGORIES',
        payload: data
    };
}

function setImages(data) {
    return {
        type: 'SET_IMAGES',
        payload: data
    };
}