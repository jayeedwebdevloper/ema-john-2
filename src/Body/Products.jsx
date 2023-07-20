/* eslint-disable react/prop-types */
import iconCart from '../assets/cart-plus.svg';
const Products = ({ products, addCart }) => {
    const { name, img, seller, price, ratings } = products;

    return (
        <div className="product-items">
            <div className="product">
                <div className="product-img">
                    <img src={img} alt={name} />
                </div>
                <div className="product-contents">
                    <h4 className="title">
                        {name}
                    </h4>
                    <h5 className="price">
                        Price : $<b>{price}</b>
                    </h5>
                    <p className="short-details">Manufacturer : {seller}</p>
                    <p className="short-details">Rating : {ratings} Star</p>
                </div>
                <a onClick={() => addCart(products)} className="cart"><div className="flex">Add To Cart <img src={iconCart} alt={name} /></div></a>
            </div>
        </div>
    );
};

export default Products;