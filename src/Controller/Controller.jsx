/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Controller = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Controller;