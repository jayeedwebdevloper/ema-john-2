/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.jpg';

const Home = () => {
    return (
        <div className='container'>
            <div className="flex column home">
                <div className="half">
                    <p>Sale up to 70% off</p>
                    <h1>New Collection For Fall</h1>
                    <h4>Discover all the new arrivals of ready-to-wear collection.</h4>
                    <Link to='/shop'><button>Shop Now</button></Link>
                </div>
                <div className="half2">
                    <img className='home-img' src={homeImage} alt="ema-john" />
                </div>
            </div>
        </div>
    );
};

export default Home;