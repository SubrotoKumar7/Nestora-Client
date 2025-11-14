import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className='bg-base-100 relative flex flex-col justify-between min-h-screen'>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ?
                <Loader></Loader>
                :
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;