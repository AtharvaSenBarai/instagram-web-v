import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
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
<div class="grid-7 element-animation">
    <div class="card color-card-2">

      <img src="{photo || './images/avatars/placeholder.png'}" alt="profile-pic" class="profile">
<div>
      <h1 class="title-2">{username}</h1>
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
      <p class="job-title">{displayName}</p>
      <div class="desc top">
        <p>{email}</p>
      </div>
      <button class="btn color-a top"> Hire me</button>

      <hr class="hr-2">
      <div class="container">
        <div class="content">
          <div class="grid-2">
            <button class="color-b circule"> <i class="fab fa-dribbble fa-2x"></i></button>
            <h2 class="title-2">{totalPost}</h2>
            <p class="followers">Post</p>
          </div>
          <div class="grid-2">
            <button class="color-c circule"><i class="fab fa-behance fa-2x"></i></button>
            <h2 class="title-2">{totalFollowers}</h2>
            <p class="followers">Followers</p>
          </div>
          <div class="grid-2">
            <button class="color-d circule"><i class="fab fa-github-alt fa-2x"></i></button>
            <h2 class="title-2">{following.length}</h2>
            <p class="followers">Following</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 {isMyProfile && (
                <motion.button
                    onClick={() => setIsModal(true)}
                    title="Create Post"
                    type="button"
                    whileTap={{ rotateX: 90 }}
                    whileHover={{ scale: 1.1 }}
                    className=" bg-red-rose h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center rounded-full text-white text-xl sm:text-2xl md:text-3xl shadow-xl object-right-bottom absolute bottom-4 right-4 sm:bottom-8 sm:right-8 cursor-pointer"
                >
                    <FiEdit />
                </motion.button>
            )}
            {isModal && <Modal user={user} setIsModal={setIsModal} />}
        </div>
    );
};

export default ProfileHeader;
