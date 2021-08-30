import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedUsers } from '../../services/services';
import SuggestedUser from './SuggestedUser';

const Suggestions = ({ following, userUid, loggedInDocId }) => {
    const [userProfiles, setUserProfiles] = useState([]);

    useEffect(() => {
        const getSuggestedProfiles = async () => {
            const profiles = await getSuggestedUsers(userUid, following);
            setUserProfiles(profiles);
        };

        if (userUid) {
            getSuggestedProfiles();
        }
    }, [following, userUid]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-4 h-8">
                <p className="text-gray-text font-bold ">Suggestion for you</p>
                <button type="button" className="text-sm text-black ">
                    See all
                </button>
            </div>
            <div>
                {userProfiles.length !== 0 ? (
                    userProfiles.map((item) => (
                        <SuggestedUser
                            key={item.docId}
                            user={item}
                            loggedInDocId={loggedInDocId}
                            loggedInUserUId={userUid}
                        />
                    ))
                ) : (
                    <Skeleton count={10} height={60} className="mb-2" />
                )}
            </div>
        </div>
    );
};
export default Suggestions;