import React, { useState } from 'react';
import Rating from 'react-rating';
const Product = ({ product }) => {
    const { title, description, image, price } = product;
    const [expanded, setExpanded] = useState(false);
    const maxLength = 150;
    const toggleDescription = () => {
        setExpanded(!expanded);
    };
    const getDescription = () => {
        if (description.length <= maxLength) {
            return description;
        }
        return expanded ? description : description.slice(0, maxLength) + '...';
    };
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Image of an Product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}!</h2>
                <p>{getDescription()}</p>
                {description.length > maxLength && (
                    <button onClick={toggleDescription} className="btn btn-sm btn-outline">
                        {expanded ? 'See less' : 'See more'}
                    </button>
                )}
                <p className='text-xl font-semibold'>Price: {price}</p>
                <p>Ratings:
                    <Rating
                        placeholderRating={product.Rating}
                        readonly
                        emptySymbol={<img src="https://cdn0.iconfinder.com/data/icons/hippicons-nature/64/star-o-512.png" className="icon w-[25px]" />}
                        placeholderSymbol={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_Y3fYBiHbNme4YA2IMD8EsakkxiMXc-0JQ&usqp=CAU" className="icon w-[25px]" />}
                        fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                    /> <span className='text-xl font-semibold'>{product.Rating}</span>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;