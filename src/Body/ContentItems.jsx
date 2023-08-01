import { useEffect } from "react";
import { useState } from "react";
import Products from "./Products";

const ContentItems = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    let price = 0;
    let shipping = 0;
    const addCart = (products) => {
        const addedCart = [...cart, products];
        setCart(addedCart);

    }
    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((price * 0.05).toFixed(2));
    let grand = price + tax + shipping;
    let items = cart.length;

    const canceled = () => {
        items = 0;
        price = 0;
        shipping = 0;
        tax = 0;
        grand = 0;
        setCart('');
    }

    return (
        <div>
            <div className="content">
                <div className="products">
                    {
                        products.map(product => <Products key={product.id} products={product} addCart={addCart}>

                        </Products>)
                    }
                </div>
                <div className="cart-section" id="cart-sec">
                    <div className="fixed">
                        <h5>Order Summary</h5>
                        <p>Selected Items: {items}</p>
                        <p>Total Price: $ {price}</p>
                        <p>Total Shipping Charge: $ {shipping}</p>
                        <p>Tax: $ {tax}</p>
                        <p className="grand">Grand Total: $ {grand}</p>
                        <button onClick={canceled} className="cancel"><div className="flex">Clear Cart <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M13.7188 18.25H14.6562C14.7806 18.25 14.8998 18.2006 14.9877 18.1127C15.0756 18.0248 15.125 17.9056 15.125 17.7812V9.34375C15.125 9.21943 15.0756 9.1002 14.9877 9.01229C14.8998 8.92439 14.7806 8.875 14.6562 8.875H13.7188C13.5944 8.875 13.4752 8.92439 13.3873 9.01229C13.2994 9.1002 13.25 9.21943 13.25 9.34375V17.7812C13.25 17.9056 13.2994 18.0248 13.3873 18.1127C13.4752 18.2006 13.5944 18.25 13.7188 18.25ZM20.125 5.125H16.9059L15.5777 2.91016C15.4111 2.63243 15.1753 2.40261 14.8934 2.24311C14.6115 2.0836 14.293 1.99985 13.9691 2H10.0309C9.70709 1.99998 9.38883 2.0838 9.10707 2.2433C8.82531 2.4028 8.58965 2.63254 8.42305 2.91016L7.09414 5.125H3.875C3.70924 5.125 3.55027 5.19085 3.43306 5.30806C3.31585 5.42527 3.25 5.58424 3.25 5.75V6.375C3.25 6.54076 3.31585 6.69973 3.43306 6.81694C3.55027 6.93415 3.70924 7 3.875 7H4.5V20.125C4.5 20.6223 4.69754 21.0992 5.04917 21.4508C5.40081 21.8025 5.87772 22 6.375 22H17.625C18.1223 22 18.5992 21.8025 18.9508 21.4508C19.3025 21.0992 19.5 20.6223 19.5 20.125V7H20.125C20.2908 7 20.4497 6.93415 20.5669 6.81694C20.6842 6.69973 20.75 6.54076 20.75 6.375V5.75C20.75 5.58424 20.6842 5.42527 20.5669 5.30806C20.4497 5.19085 20.2908 5.125 20.125 5.125ZM9.9625 3.98867C9.98339 3.9539 10.0129 3.92515 10.0483 3.90523C10.0836 3.8853 10.1235 3.87489 10.1641 3.875H13.8359C13.8764 3.87495 13.9162 3.8854 13.9515 3.90532C13.9868 3.92524 14.0163 3.95396 14.0371 3.98867L14.7191 5.125H9.28086L9.9625 3.98867ZM17.625 20.125H6.375V7H17.625V20.125ZM9.34375 18.25H10.2812C10.4056 18.25 10.5248 18.2006 10.6127 18.1127C10.7006 18.0248 10.75 17.9056 10.75 17.7812V9.34375C10.75 9.21943 10.7006 9.1002 10.6127 9.01229C10.5248 8.92439 10.4056 8.875 10.2812 8.875H9.34375C9.21943 8.875 9.1002 8.92439 9.01229 9.01229C8.92439 9.1002 8.875 9.21943 8.875 9.34375V17.7812C8.875 17.9056 8.92439 18.0248 9.01229 18.1127C9.1002 18.2006 9.21943 18.25 9.34375 18.25Z" fill="white" />
                        </svg></div></button>
                        <button className="cash"><div className="flex">Review Order <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M11.3789 3.85556L12.4524 2.78202C12.907 2.32745 13.642 2.32745 14.0918 2.78202L23.4925 12.1779C23.9471 12.6325 23.9471 13.3675 23.4925 13.8172L14.0918 23.218C13.6372 23.6725 12.9022 23.6725 12.4524 23.218L11.3789 22.1444C10.9195 21.685 10.9292 20.9355 11.3982 20.4858L17.2253 14.9343H3.32733C2.68418 14.9343 2.16675 14.4169 2.16675 13.7737V12.2263C2.16675 11.5831 2.68418 11.0657 3.32733 11.0657H17.2253L11.3982 5.51422C10.9243 5.0645 10.9147 4.31495 11.3789 3.85556Z" fill="white" />
                        </svg></div></button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContentItems;