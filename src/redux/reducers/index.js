export default function (state = {categories:[],images:[]}, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {...state, categories: action.payload};
        case 'SET_IMAGES':
            return {...state, images: [...state.images, ...action.payload]};
        case 'CLEAR_IMAGES':
            return {...state, images: []};
        default:
            return state;
    }
}