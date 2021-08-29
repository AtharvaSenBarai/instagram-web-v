import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Suggestions from './Suggestions/Suggestions';

const SideBar = () => {
    const {
        user: { photo, email, username, displayName, following, uid, docId: loggedInDocId },
    } = useUser();

    return (
        <div className="mt-8">
            {email ? (
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-8 items-center">
                        <div>
                            <Link to="/profile" className="pointer">
                                <img
                                    src={photo || './images/avatars/placeholder.png'}
                                    alt="users"
                                    className="h-14 w-14 rounded-full"
                                />
                            </Link>
                        </div>

                        <div>
                            <div>
                                <Link
                                    to="/profile"
                                    className="font-medium text-black hover:underline pointer"
                                >
                                    {username}
                                </Link>
                            </div>
                            <div className="text-gray-base">{displayName}</div>
                        </div>
                    </div>
                    <button type="button" className="text-blue text-sm font-medium">
                        Switch
                    </button>
                </div>
            ) : (
                <Skeleton height={80} className="rounded" />
            )}
            <div>
                <Suggestions userUid={uid} loggedInDocId={loggedInDocId} following={following} />
            </div>
        </div>
    );
};
export default SideBar;
