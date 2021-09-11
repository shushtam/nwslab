import React, {useState} from "react";
import {connect} from "react-redux";
import Image from "../Image/Image";
import './css/style.css';

const Images = (props) => {
    const {images, onLoadMore} = props;
    const [page, setPage] = useState(1);

    const handleClick = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        onLoadMore(nextPage);
    };

    return (
        <div>
            <h2>Images</h2>
            {images && images.length
                ?
                <div>
                    <div className={'image-list'}>
                        {images.map((image, index) => {
                            return <Image key={`image-${image.id}-${index}`} image={image}/>;
                        })}
                    </div>
                    <button onClick={handleClick}>Load more</button>
                </div>
                : "No Images!"}
        </div>
    );
}

const mapStateToProps = state => {
    const images = state && state.images;
    return {images};
};

export default connect(mapStateToProps)(Images);
