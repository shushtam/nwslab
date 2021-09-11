import {Component} from "react";
import {connect} from "react-redux";
import Categories from "../Categories/Categories";
import Images from "../Images/Images";
import {fetchCategories, fetchImages, clearImages} from "../../redux/actions";
import './css/style.css';

class Main extends Component {
    state = {
        categoryId: null,
    };

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchImages();
    }

    handleCategoryClick = (categoryId) => {
        this.setState({categoryId});
        this.props.clearImages();
        this.props.fetchImages(categoryId);
    };

    handleLoadMore = (page) => {
        this.props.fetchImages(this.state.categoryId, page);
    }

    render() {
        return (
            <div className={'main'}>
                <Categories onClick={this.handleCategoryClick}/>
                <Images onLoadMore={this.handleLoadMore}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({state});

export default connect(
    mapStateToProps,
    {
        fetchCategories,
        fetchImages,
        clearImages,
    }
)(Main);
