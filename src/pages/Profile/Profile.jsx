import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  ProfileAccount,
  ProfileAvatar,
  ProfileInfo,
  ProfileNumbers,
  ProfileText,
  Posts,
  PostsItem
} from './styled'

import Header from '../../components/Header';
import { DefaultButton } from '../../components/Button/Button';
import { WrapperContent } from '../../components/Wrapper/Wrapper';

import { showModal } from '../../store/modal/actions';
import { getCurrentUserSelector } from '../../store/users/selectors';

import ProfileAvatarImg from '../../assets/images/profile-avatar.png';
import ProfileDefaultAvatarImg from '../../assets/images/icons/icon-default-avatar.svg';
import ProfileImg1 from '../../assets/images/profile-image-1.jpg';
import ProfileImg2 from '../../assets/images/profile-image-2.jpg';
import ProfileImg3 from '../../assets/images/profile-image-3.jpg';
import ProfileImg4 from '../../assets/images/profile-image-4.jpg';
import ProfileImg5 from '../../assets/images/profile-image-5.jpg';
import ProfileImg6 from '../../assets/images/profile-image-6.jpg';

const Images = [ProfileImg1, ProfileImg2, ProfileImg3, ProfileImg4, ProfileImg5, ProfileImg6];

const Profile = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, avatar } = useSelector(getCurrentUserSelector);

  const openModal = () => {
    dispatch(showModal())
  }

  return (
    <>
      <Header />
      <WrapperContent>
        <ProfileAccount>
          <ProfileAvatar>
            {avatar ? <img src={ProfileAvatarImg} alt="" /> : <img src={ProfileDefaultAvatarImg} alt="" />}
          </ProfileAvatar>
          <ProfileInfo>
            <ProfileNumbers>
              <span><strong>2</strong> posts</span>
              <span><strong>300</strong> folowers</span>
              <span><strong>300</strong> folowings</span>
            </ProfileNumbers>
            <DefaultButton type="button" className="btn-profile">Follow</DefaultButton>
            <ProfileText>
              {`${firstName} ${lastName}`}
            </ProfileText>
          </ProfileInfo>
        </ProfileAccount>

        <Link to='/new_post'>Add new post</Link>

        <Posts>
          {
            Images.map(
              (img, i) =>
                <PostsItem key={'img' + i}>
                  <img src={img} alt="" onClick={openModal} />
                </PostsItem>
            )
          }
        </Posts>
      </WrapperContent>
    </>
  );
}

export default Profile;