import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/context';
import useUser from '../../hooks/useUser';
import {
    updateFollowingUsersFollowers,
    updateLoggedInUserFollowing,
} from '../../services/services';
import Modal from '../Modal';

const ProfileHeader = ({ user, totalPost }) => {
    const { username, email, photo, followers, following, displayName } = user;
    const { loggedInUser } = useContext(UserContext);
    const isMyProfile = user.uid === loggedInUser.uid;
    const { user: authUser } = useUser();
    const [isFollowingUser, setIsFollowingUser] = useState(followers.includes(loggedInUser.uid));
    const [totalFollowers, setTotalFollowers] = useState(followers.length);

    const handleFollowUser = async () => {
        await updateLoggedInUserFollowing(authUser.docId, user.uid, isFollowingUser);
        await updateFollowingUsersFollowers(user.userDocId, authUser.uid, isFollowingUser);
        await setTotalFollowers(() => (isFollowingUser ? totalFollowers - 1 : totalFollowers + 1));
        await setIsFollowingUser(() => !isFollowingUser);
    };

    const [isModal, setIsModal] = useState(false);
    return (

const Following = () => (
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
        
                       
                    <div className="w-8/12 lg:w-9/12">
                        <div className="md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4">
                            <h1 className="text-3xl md:4xl font-normal">{username}</h1>

                            {!authUser.following && !isMyProfile ? (
                                <Skeleton count={1} height={30} width={100} />
                            ) : authUser.following && !isMyProfile ? (
                                <button
                                    type="button"
                                    className={`py-1 px-8  rounded text-sm font-medium  shadow w-full md:w-max ${
                                        isFollowingUser
                                            ? 'bg-gray-border text-gray-base'
                                            : 'bg-blue text-white'
                                    }`}
                                    onClick={handleFollowUser}
                                >
                                    {isFollowingUser ? 'Unfollow' : 'Follow'}
                                </button>
                            ) : null}

                            {isMyProfile ? (
                                <Link to="/edit">
                                    <button
                                        type="button"
                                        className="py-1 border text-sm rounded font-medium px-4 w-full md:w-max"
                                    >
                                        Edit Profile
                                    </button>
                                </Link>
                            ) : null}
                        </div>
                        <div className="hidden w-6/12 md:flex justify-between my-3">
                            
                            <h1>
                                <span className="font-bold">{following.length}</span> Following
                            </h1>
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-between px-12 mt-12 border border-gray-border py-2 text-center text-sm text-gray-base md:hidden">
                    <div className="text-center">
                     
                        <p className="font-bold">{following.length}</p>
                        <p>Following</p>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
);

export default Following;
