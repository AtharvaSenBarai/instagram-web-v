import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => (
    <div>
        <Helmet>
            <title>404 - Not Found</title>
        </Helmet>
        <div className="h-screen overflow-auto">
            <Header />
            <div className="container mx-auto max-w-screen-lg bg-white mt-24 flex justify-center text-center">
                <div className="w-w/6  sm:w-4/6 ">
                    <h1 className="text-xl font-medium mb-2">Opps... </h1>
                    <p>
                        The page which you want to visit is not found....{' '}
                        <Link className="pointer text-blue" to="/">
                            Go Back to home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default NotFound;
