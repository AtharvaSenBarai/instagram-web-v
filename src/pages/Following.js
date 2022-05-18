import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => (
    <div>
        <Helmet>
            <title>Detagram | Following</title>
        </Helmet>
        <div className="h-screen overflow-auto">
            <Header />
            <div className="container mx-auto max-w-screen-lg bg-white mt-24 flex justify-center text-center">
                <div className="w-w/6  sm:w-4/6 ">
                    <h1 className="text-xl font-medium mb-2">Accounts You Follow</h1>
                    <p>
                        This Page is in Construction. This page is going to come soon.{' '}
                        <Link className="pointer text-blue" to="/">
                            Go Back to home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default NotFound
